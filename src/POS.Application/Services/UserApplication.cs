using AutoMapper;
using FluentValidation;
using POS.Application.Commons.Base;
using POS.Application.DTO.Request;
using POS.Application.DTO.Response;
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

    public UserApplication(
        IUnitOfWork unitOfWork,
        IMapper mapper,
        IValidator<User> validator,
        IValidator<UserRequestDto> login
    )
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _validator = validator;
        _login = login;
    }

    public async Task<BaseResponse<User>> Login(UserRequestDto userRequest)
    {
        var response = new BaseResponse<User>();
        User userMapper = _mapper.Map<User>(userRequest);
        var validation = await IsValidateLogin(userMapper, "Login");
        if (validation.ErrorCount > 0)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_VALIDATE;
            response.Errors = validation;
            return response;
        }
        User account = await _unitOfWork.Users.GetUser(userMapper);
        if (account is not null)
        {
            if (BC.Verify(userRequest.Password, account.Password))
            {
                response.Success = true;
                response.Data = account;
                response.Message = ReplyMessage.MESSAGE_QUERY;
            }
        }
        else
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_QUERY_EMTY;
        }
        return response;
    }

    public async Task<BaseResponse<bool>> Register(User user)
    {
        var response = new BaseResponse<bool>();
        var validation = await IsValidateLogin(user, "Register");
        if (validation.ErrorCount > 0)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_VALIDATE;
            response.Errors = validation;
            return response;
        }
        user.Password = BC.HashPassword(user.Password);
        var account = await _unitOfWork.Users.AddUser(user);
        if (!account)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_FAILED;
        }
        else
        {
            response.Success = true;
            response.Message = ReplyMessage.MESSAGE_SAVE;
        }
        return response;
    }

    public async Task<ErrorResponseDto> IsValidateLogin(User user, string form)
    {
        var isEmailValid = await _unitOfWork.Users.ValidateEmail(user);
        var errorResponse = new ErrorResponseDto
        {
            Email = new List<string>(),
            FirstName = new List<string>(),
            LastName = new List<string>(),
            Password = new List<string>(),
        };

        // * When the user needs to register
        if (form == "Register" && isEmailValid == true)
            errorResponse.Email.Add("El email ya existe");

        var validateResult = await _validator.ValidateAsync(user);
        foreach (var error in validateResult.Errors)
        {
            List<string>? errorMessageList =
                errorResponse.GetType().GetProperty(error.PropertyName)?.GetValue(errorResponse)
                as List<string>;
            errorMessageList?.Add(error.ErrorMessage);
        }
        return errorResponse;
    }
}
