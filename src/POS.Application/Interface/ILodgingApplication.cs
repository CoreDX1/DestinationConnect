using POS.Application.Commons.Base;
using POS.Application.DTO.Response.Lodging;
using POS.Domain.Entities;
using POS.Infrastructure.Commons.Base.Request;
using POS.Infrastructure.Commons.Base.Response;

namespace POS.Application.Interface;

public interface ILodgingApplication
{
    Task<IEnumerable<Lodging>> GetLodgings();
    Task<BaseResponse<BaseEntityResponse<LodgingResponseDto>>> ListLodgings(
        BaseFiltersRequest filters
    );
}
