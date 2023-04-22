using Microsoft.EntityFrameworkCore;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Infrastructure.Persistences.Repository;

public class UserRespositoy : GenericRepository<User>, IUserRepositoy
{

    public UserRespositoy(DestinationConnectContext context) : base(context)
    {
    }

    public async Task<bool> AddUser(User user)
    {
        await _context.Users.AddAsync(user);
        var record = await _context.SaveChangesAsync();
        return record > 0;
    }

    public async Task<User> GetUser(User user)
    {
        User? response = await _context.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Email == user.Email);
        return response!;
    }

    public async Task<bool> ValidateEmail(User user)
    {
        bool response = await _context.Users.AnyAsync(x => x.Email.Equals(user.Email));
        return response;
    }
}
