using FluentValidation;
using POS.Application.DTO.Request.User;
using POS.Application.DTO.Response.User;
using POS.Application.Interface;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Application.ErrorValidation.UserError;

public class MessageError : IMessageError
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IValidator<UserRequestDto> _validatorLogin;
    private readonly IValidator<User> _validatorRegister;

    public MessageError(
        IUnitOfWork unitOfWork,
        IValidator<UserRequestDto> _valdatorLogin,
        IValidator<User> validatorRegister
    )
    {
        _unitOfWork = unitOfWork;
        _validatorLogin = _valdatorLogin;
        _validatorRegister = validatorRegister;
    }

    public async Task<ErrorLoginResponseDto> Login(UserRequestDto user)
    {
        var validateResult = await _validatorLogin.ValidateAsync(user);

        var errorResponse = new ErrorLoginResponseDto
        {
            Email = new List<string>(),
            Password = new List<string>(),
        };

        // TODO: When the user needs to login
        foreach (var error in validateResult.Errors)
        {
            List<string>? errorMessageList =
                errorResponse.GetType().GetProperty(error.PropertyName)?.GetValue(errorResponse)
                as List<string>;
            errorMessageList?.Add(error.ErrorMessage);
        }
        return errorResponse;
    }

    public async Task<ErrorRegisterResponseDto> Register(User user)
    {
        var errorResponse = new ErrorRegisterResponseDto
        {
            Email = new List<string>(),
            FirstName = new List<string>(),
            LastName = new List<string>(),
            Password = new List<string>(),
        };

        bool isEmailValid = await _unitOfWork.Users.ValidateEmail(user);

        if (!isEmailValid)
            errorResponse.Email.Add("Email is not valid");

        var validateResult = await _validatorRegister.ValidateAsync(user);

        // TODO: When the user needs to login
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
