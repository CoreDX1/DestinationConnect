using POS.Domain.Entities;

namespace POS.Infrastructure.Persistences.Interfaces;

public interface IUserRepositoy
{
    public Task<bool> AddUser(User user);
    public Task<User> GetUser(User user);
    public Task<bool> ValidateEmail(User user);
}
