using FluentValidation;
using POS.Domain.Entities;

namespace POS.Application.Validators;

public class UserValidatorRules : AbstractValidator<User>
{
    public UserValidatorRules()
    {
        // TODO : Adding Fluent Validation rules
        RuleFor(x => x.Email)
            .EmailAddress()
            .WithMessage("Email no es valido")
            .Length(1, 50)
            .WithMessage("El Email debe tener entre 1 y 50 caracteres")
            .NotNull()
            .NotEmpty()
            .WithMessage("Email es requerido");
        RuleFor(x => x.Password).NotNull().NotEmpty().WithMessage("Password es requerido");
        RuleFor(x => x.FirstName).NotNull().NotEmpty().WithMessage("FirstName es requerido");
        RuleFor(x => x.LastName).NotNull().NotEmpty().WithMessage("LastName es requerido");
    }
}
