using AutoMapper;
using POS.Application.DTO.Request;
using POS.Domain.Entities;

namespace POS.Application.Mappers;

public class UserMappingsProfile : Profile
{
    public UserMappingsProfile()
    {
        CreateMap<UserRequestDto, User>();
    }
}
