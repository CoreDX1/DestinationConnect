using AutoMapper;
using FluentValidation;
using POS.Application.Commons.Base;
using POS.Application.DTO.Request;
using POS.Application.DTO.Response;
using POS.Application.Interface;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Interfaces;
using POS.Utilities.Static;

namespace POS.Application.Services;

public class UserApplication : IUserApplication
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly IValidator<User> _validator;

    public UserApplication(IUnitOfWork unitOfWork, IMapper mapper, IValidator<User> validator)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _validator = validator;
    }

    public async Task<BaseResponse<User>> Login(UserRequestDto userRequest)
    {
        var response = new BaseResponse<User>();
        User userMapper = _mapper.Map<User>(userRequest);
        var validation = await _validator.ValidateAsync(userMapper);
        if (!validation.IsValid)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_VALIDATE;
            response.Errors = await IsValidateLogin(userMapper, 0);
            return response;
        }
        var account = await _unitOfWork.Users.GetUser(userMapper);
        if (account is null)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_QUERY_EMTY;
        }
        else
        {
            response.Success = true;
            response.Data = account;
            response.Message = ReplyMessage.MESSAGE_QUERY;
        }
        return response;
    }

    public async Task<BaseResponse<bool>> Register(User user)
    {
        var response = new BaseResponse<bool>();
        var validation = await IsValidateLogin(user, 1);
        if (validation.ErrorCount > 0)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_VALIDATE;
            response.Errors = validation;
            return response;
        }
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

    public async Task<ErrorResponseDto> IsValidateLogin(User user, int form)
    {
        var validate = await _validator.ValidateAsync(user);
        var emailValidate = await _unitOfWork.Users.ValidateEmail(user);
        List<string> email = new List<string>();
        List<string> password = new List<string>();
        if (form == 1 && emailValidate == true)
        {
            email.Add("El email ya existe");
        }
        for (int i = 0; i < validate.Errors.Count(); i++)
        {
            string errorMessage = validate.Errors[i].ErrorMessage;
            if (validate.Errors[i].PropertyName == "Email")
            {
                email.Add(errorMessage);
            }
            if (validate.Errors[i].PropertyName == "Password")
            {
                password.Add(errorMessage);
            }
        }
        return new ErrorResponseDto { Email = email, Password = password };
    }
}
