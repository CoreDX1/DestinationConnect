using AutoMapper;
using POS.Application.DTO.Request.Lodging;
using POS.Application.DTO.Response.Lodging;
using POS.Domain.Entities;
using POS.Infrastructure.Commons.Base.Response;

namespace POS.Application.Mappers;

public class LodgingMappingsProfile : Profile
{
    public LodgingMappingsProfile()
    {
        CreateMap<Lodging, LodgingResponseDto>();
        CreateMap<BaseEntityResponse<Lodging>, BaseEntityResponse<LodgingResponseDto>>()
            .ReverseMap();
        CreateMap<LodgingRequestDto, Lodging>();
    }
}
