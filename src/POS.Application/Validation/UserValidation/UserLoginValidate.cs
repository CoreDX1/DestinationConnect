using FluentValidation;
using POS.Application.DTO.Request.User;

namespace POS.Application.Validation.UserValidation;

public class UserLoginValidator : AbstractValidator<UserRequestDto>
{
    public UserLoginValidator()
    {
        RuleFor(x => x.Email)
            .EmailAddress()
            .WithMessage("Email no es valido")
            .Length(1, 50)
            .WithMessage("El Email debe tener entre 1 y 50 caracteres")
            .NotNull()
            .NotEmpty()
            .WithMessage("Email es requerido");
        RuleFor(x => x.Password).NotNull().NotEmpty().WithMessage("Password es requerido");
    }
}
