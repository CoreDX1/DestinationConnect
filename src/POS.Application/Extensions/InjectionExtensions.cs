using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using POS.Application.Interface;
using POS.Application.Services;

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
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        return services;
    }
}
