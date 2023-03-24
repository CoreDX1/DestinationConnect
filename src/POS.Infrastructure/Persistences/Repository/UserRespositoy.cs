using Microsoft.EntityFrameworkCore;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Infrastructure.Persistences.Repository;

public class UserRespositoy : IUserRepositoy
{
    private readonly DestinationConnectContext _context;

    public UserRespositoy(DestinationConnectContext context) => _context = context;

    public async Task<bool> AddUser(User user)
    {
        await _context.Users.AddAsync(user);
        var record = await _context.SaveChangesAsync();
        return record > 0;
    }

    public async Task<User> GetUser(string email, string password)
    {
        User? response = await _context.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Email == email && x.Password == password);
        return response!;
    }
}
