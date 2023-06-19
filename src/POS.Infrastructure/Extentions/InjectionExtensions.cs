using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;
using POS.Infrastructure.Persistences.Repository;

namespace POS.Infrastructure.Extentions;

public static class InjectionExtensions
{
    public static IServiceCollection AddInjectionInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration
    )
    {
        var assebly = typeof(DestinationConnectContext).Assembly.FullName;
        services.AddDbContext<DestinationConnectContext>(
            options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("POSConnectionString"),
                    b => b.MigrationsAssembly(assebly)
                ),
            ServiceLifetime.Transient
        );
        services.AddTransient<IUnitOfWork, UnitOfWork>();
        services.AddTransient<IUserRepositoy, UserRespositoy>();
        services.AddTransient<ILodgingRepository, LodgingRepository>();
        return services;
    }
}
