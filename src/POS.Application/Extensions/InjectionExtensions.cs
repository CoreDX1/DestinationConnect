using System.Reflection;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using POS.Application.DTO.Request.User;
using POS.Application.Interface;
using POS.Application.Services;
using POS.Application.Validation.UserValidation;
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
        services.AddScoped<ILodgingApplication, LodgingApplication>();
        services.AddScoped<IValidator<User>, UserRegisterValidation>();
        services.AddScoped<IValidator<UserRequestDto>, UserLoginValidator>();
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        return services;
    }
}
