using Microsoft.EntityFrameworkCore;
using POS.Domain.Entities;
using POS.Infrastructure.Commons.Base.Request;
using POS.Infrastructure.Commons.Base.Response;
using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Infrastructure.Persistences.Repository;

public class LodgingRepository : GenericRepository<Lodging>, ILodgingRepository
{
    private readonly DestinationConnectContext _context;

    public LodgingRepository(DestinationConnectContext context)
    {
        _context = context;
    }

    // TODO : Filters and Ordering  //
    public async Task<BaseEntityResponse<Lodging>> ListLodging(BaseFiltersRequest filter)
    {
        var response = new BaseEntityResponse<Lodging>();
        IQueryable<Lodging> lodgins = (
            from c in _context.Lodgings
            where c.State.Equals(filter.StateFilter)
            select c
        )
            .AsNoTracking()
            .AsQueryable();
        if (filter.NumFilters is not null && !string.IsNullOrEmpty(filter.TextFilter))
        {
            switch (filter.NumFilters)
            {
                case 1:
                    lodgins = lodgins.Where(x => x.Locality!.Contains(filter.TextFilter));
                    break;
                case 2:
                    lodgins = lodgins.Where(x => x.Description!.Contains(filter.TextFilter));
                    break;
                case 3:
                    lodgins = lodgins.Where(x => x.LodgingType!.Contains(filter.TextFilter));
                    break;
            }
        }

        if (filter.StateFilter is not null)
        {
            lodgins = lodgins.Where(x => x.State.Equals(filter.StateFilter));
        }
        if (!string.IsNullOrEmpty(filter.StartData) && !string.IsNullOrEmpty(filter.EndData))
        {
            lodgins = lodgins.Where(
                x =>
                    x.DateStart >= Convert.ToDateTime(filter.StartData)
                    && x.DateEnd <= Convert.ToDateTime(filter.EndData).AddDays(1)
            );
        }
        if (filter.Sort is null)
        {
            filter.Sort = "Id";
        }
        response.TotalRecords = await lodgins.CountAsync();
        response.Items = await Ordering(filter, lodgins, true).ToListAsync();
        return response;
    }

    // TODO : Call the entire list //
    public async Task<IEnumerable<Lodging>> GetLodging()
    {
        IEnumerable<Lodging> response = await _context.Lodgings.ToListAsync();
        return response!;
    }
}
