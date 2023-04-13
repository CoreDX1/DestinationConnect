using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Infrastructure.Persistences.Repository;

public class UnitOfWork : IUnitOfWork
{
    public IUserRepositoy Users { get; private set; }

    public ILodgingRepository Lodgings { get; private set; }

    private readonly DestinationConnectContext _context;

    public UnitOfWork(DestinationConnectContext context)
    {
        _context = context;
        Users = new UserRespositoy(_context);
        Lodgings = new LodgingRepository(_context);
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
