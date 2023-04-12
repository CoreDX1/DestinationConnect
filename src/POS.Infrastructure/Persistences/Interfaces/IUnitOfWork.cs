namespace POS.Infrastructure.Persistences.Interfaces;

public interface IUnitOfWork : IDisposable
{
    IUserRepositoy Users { get; }
    ILodgingRepository Lodgings { get; }
    void SaveChanges();
    Task SaveChangesAsync();
}
