using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Infrastructure.Persistences.Repository;

public class UnitOfWork : IUnitOfWork
{
    private readonly DestinationConnectContext _context;

    public IUserRepositoy Users { get; }

    public ILodgingRepository Lodgings { get; private set; }

    public UnitOfWork(
        DestinationConnectContext destinationDbContext,
        IUserRepositoy usersRespository,
        ILodgingRepository lodgingsRespository
    )
    {
        this._context = destinationDbContext;
        this.Lodgings = lodgingsRespository;
        this.Users = usersRespository;
    }

    public void Dispose()
    {
        _context.Dispose();
    }

    public void SaveChanges()
    {
        _context.SaveChanges();
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}
