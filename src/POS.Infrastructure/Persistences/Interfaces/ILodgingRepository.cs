using POS.Domain.Entities;
using POS.Infrastructure.Commons.Base.Request;
using POS.Infrastructure.Commons.Base.Response;

namespace POS.Infrastructure.Persistences.Interfaces;

public interface ILodgingRepository
{
    Task<IEnumerable<Lodging>> GetLodging();
    Task<BaseEntityResponse<Lodging>> ListLodging(BaseFiltersRequest filter);
}
