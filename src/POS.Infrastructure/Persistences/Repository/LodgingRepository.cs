using System.Linq.Expressions;
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

        // TODO: Requesting all the data in the table
        IQueryable<Lodging> lodgins = _context.Lodgings
            .AsNoTracking()
            .Where(x => x.State.Equals(filter.StateFilter))
            .AsQueryable();

        // TODO: Filter Lodgings Type
        lodgins =
            (!string.IsNullOrEmpty(filter.TextLodgingType))
                ? lodgins.Where(x => x.LodgingType!.Contains(filter.TextLodgingType))
                : lodgins;

        // TODO: Filters //
        if (filter.NumFilters != null && !string.IsNullOrEmpty(filter.TextFilter))
        {
            Expression<Func<Lodging, bool>> predicate = filter.NumFilters switch
            {
                1 => x => x.Locality!.Contains(filter.TextFilter),
                2 => x => x.Description!.Contains(filter.TextFilter),
                _ => x => true
            };
            lodgins = lodgins.Where(predicate);
        }

        if (filter.StateFilter is not null)
            lodgins = lodgins.Where(x => x.State.Equals(filter.StateFilter)).AsNoTracking();

        if (!string.IsNullOrEmpty(filter.StartData) && !string.IsNullOrEmpty(filter.EndData))
        {
            DateTime startDate = Convert.ToDateTime(filter.StartData);
            DateTime endDate = Convert.ToDateTime(filter.EndData).AddDays(1);
            lodgins = lodgins.Where(x => x.DateStart >= startDate && x.DateEnd <= endDate);
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