using AutoMapper;
using POS.Application.DTO.Request.User;
using POS.Domain.Entities;

namespace POS.Application.Mappers;

public class UserMappingsProfile : Profile
{
    public UserMappingsProfile()
    {
        CreateMap<UserRequestDto, User>();
    }
}
