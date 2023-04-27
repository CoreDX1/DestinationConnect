using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using POS.Application.Commons.Base;
using POS.Application.DTO.Request.User;
using POS.Application.Interface;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Interfaces;
using POS.Utilities.Static;
using BC = BCrypt.Net.BCrypt;

namespace POS.Application.Services;

public class UserApplication : IUserApplication
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly IValidator<User> _validator;
    private readonly IValidator<UserRequestDto> _login;
    private readonly IConfiguration _config;
    private readonly IMessageError _messageError;

    public UserApplication(
        IUnitOfWork unitOfWork,
        IMapper mapper,
        IValidator<User> validator,
        IValidator<UserRequestDto> login,
        IConfiguration config,
        IMessageError messageError
    )
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _validator = validator;
        _login = login;
        _config = config;
        _messageError = messageError;
    }

    public async Task<BaseResponse<string>> Login(UserRequestDto userRequest)
    {
        BaseResponse<string> response = new();
        User user = _mapper.Map<User>(userRequest);
        var loginError = await _messageError.Login(userRequest);
        if (loginError.ErrorCount > 0)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_VALIDATE;
            response.Errors!.Login = loginError;
            return response;
        }
        User account = await _unitOfWork.Users.GetUser(user);

        // TODO : Validate the user //
        if (account is not null && BC.Verify(userRequest.Password, account.Password))
        {
            response.Success = true;
            response.Data = GenerateToke(account);
            response.Message = ReplyMessage.MESSAGE_QUERY;
        }
        else
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_VALIDATE;
        }
        return response;
    }

    public async Task<BaseResponse<bool>> Register(User user)
    {
        var response = new BaseResponse<bool>();
        //*TODO: Validate the user //
        var validation = await _messageError.Register(user);
        if (validation.ErrorCount > 0)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_VALIDATE;
            response.Errors!.Register = validation;
            return response;
        }
        // TODO: Hash user password //
        user.Password = BC.HashPassword(user.Password);

        // TODO: Add user to database //
        bool account = await _unitOfWork.Users.AddUser(user);

        // TODO: Generate the toke with user information //
        response.Success = account;
        response.Message = account ? ReplyMessage.MESSAGE_SAVE : ReplyMessage.MESSAGE_QUERY_EMTY;
        return response;
    }

    // TODO: Generate the toke with user information //
    public string GenerateToke(User user)
    {
        // TODO: Creating the header //
        var security = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var credentials = new SigningCredentials(security, SecurityAlgorithms.HmacSha256);
        var header = new JwtHeader(credentials);

        // TODO: Creating the Claims //
        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.NameId, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
            new Claim(JwtRegisteredClaimNames.Name, user.FirstName),
            new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName),
            new Claim(
                JwtRegisteredClaimNames.Jti,
                Guid.NewGuid().ToString(),
                ClaimValueTypes.Integer64
            ),
        };

        // TODO: Creating the playload //
        var playload = new JwtPayload(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            notBefore: DateTime.UtcNow,
            expires: DateTime.UtcNow.AddHours(int.Parse(_config["Jwt:Expiration"]!))
        );

        // TODO: Creating the token //
        var token = new JwtSecurityToken(header, playload);
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
