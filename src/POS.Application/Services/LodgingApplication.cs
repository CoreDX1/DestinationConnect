using AutoMapper;
using POS.Application.Commons.Base;
using POS.Application.DTO.Response.Lodging;
using POS.Application.Interface;
using POS.Domain.Entities;
using POS.Infrastructure.Commons.Base.Request;
using POS.Infrastructure.Commons.Base.Response;
using POS.Infrastructure.Persistences.Interfaces;
using POS.Utilities.Static;

namespace POS.Application.Services;

public class LodgingApplication : ILodgingApplication
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public LodgingApplication(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<BaseResponse<BaseEntityResponse<LodgingResponseDto>>> ListLodgings(
        BaseFiltersRequest filters
    )
    {
        var response = new BaseResponse<BaseEntityResponse<LodgingResponseDto>>();
        var lodgings = await _unitOfWork.Lodgings.ListLodging(filters);
        if (lodgings is not null)
        {
            response.Success = true;
            response.Data = _mapper.Map<BaseEntityResponse<LodgingResponseDto>>(lodgings);
            response.Message = ReplyMessage.MESSAGE_QUERY;
        }
        else
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_QUERY_EMTY;
        }
        return response;
    }

    public async Task<IEnumerable<Lodging>> GetLodgings()
    {
        IEnumerable<Lodging> reponse = await _unitOfWork.Lodgings.GetLodging();
        return reponse;
    }
}
