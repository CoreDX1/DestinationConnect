using POS.Application.DTO.Request;
using POS.Domain.Entities;

namespace POS.Application.Interface;

public interface IUserApplication
{
    Task<bool> Register(User user);
    Task<bool> Login(UserRequestDto user);
}
