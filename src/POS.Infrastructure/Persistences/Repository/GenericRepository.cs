using POS.Infrastructure.Commons.Base.Request;
using POS.Infrastructure.Helpers;
using POS.Infrastructure.Persistences.Context;
using POS.Infrastructure.Persistences.Interfaces;
using System.Linq.Dynamic.Core;

namespace POS.Infrastructure.Persistences.Repository;

public class GenericRepository<T> : IGenericRepository<T>
    where T : class
{
    protected readonly DestinationConnectContext _context;

    protected GenericRepository(DestinationConnectContext context)
    {
        _context = context;
    }

    // TODO : Method of pagination //
    protected IQueryable<TDTO> Ordering<TDTO>(
        BasePaginationRequest request,
        IQueryable<TDTO> queryable,
        bool pagination = false
    )
        where TDTO : class
    {
        IQueryable<TDTO> queryDto =
            request.Order == "desc"
                ? queryable.OrderBy($"{request.Sort} descending")
                : queryable.OrderBy($"{request.Sort} ascending");

        if (pagination)
            queryDto = queryDto.Paginate(request);

        return queryDto;
    }
}
