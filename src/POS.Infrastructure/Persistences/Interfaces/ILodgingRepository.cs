using POS.Domain.Entities;

namespace POS.Infrastructure.Persistences.Interfaces;

public interface ILodgingRepository
{
    Task<IEnumerable<Lodging>> GetLodging();
}
