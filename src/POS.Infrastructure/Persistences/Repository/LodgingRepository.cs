using Microsoft.EntityFrameworkCore;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Infrastructure.Persistences.Repository;

public class LodgingRepository : ILodgingRepository
{
    private readonly DestinationConnectContext _context;

    public LodgingRepository(DestinationConnectContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Lodging>> GetLodging()
    {
        IEnumerable<Lodging> response = await _context.Lodgings.ToListAsync();
        return response!;
    }
}
