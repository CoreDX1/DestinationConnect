namespace POS.Infrastructure.Persistences.Interfaces;

public interface IUnitOfWork : IDisposable
{
    IUserRepositoy Users { get; }
    void SaveChanges();
    Task SaveChangesAsync();
}
