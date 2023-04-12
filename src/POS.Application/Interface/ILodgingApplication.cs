using POS.Domain.Entities;

namespace POS.Application.Interface;

public interface ILodgingApplication
{
    Task<IEnumerable<Lodging>> GetLodgings();
}
