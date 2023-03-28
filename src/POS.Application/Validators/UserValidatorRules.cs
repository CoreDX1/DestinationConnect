using FluentValidation;
using POS.Domain.Entities;

namespace POS.Application.Validators;

public class UserValidatorRules : AbstractValidator<User>
{
    public UserValidatorRules()
    {
        RuleFor<string>(x => x.Email)
            .EmailAddress()
            .WithMessage("Email no es valido")
            .NotNull()
            .NotEmpty()
            .WithMessage("Email es requerido");
        RuleFor<string>(x => x.Password)
            .NotNull()
            .NotEmpty()
            .WithMessage("Password es requerido");
    }
}
