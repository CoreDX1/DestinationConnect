using System.Reflection;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using POS.Application.Interface;
using POS.Application.Services;
using POS.Application.Validators;
using POS.Domain.Entities;

namespace POS.Application.Extensions;

public static class InjectionExtensions
{
    public static IServiceCollection AddInjectionApplication(
        this IServiceCollection services,
        IConfiguration configuration
    )
    {
        services.AddSingleton(configuration);
        services.AddScoped<IUserApplication, UserApplication>();
        services.AddScoped<IValidator<User>, UserValidatorRules>();
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        return services;
    }
}
