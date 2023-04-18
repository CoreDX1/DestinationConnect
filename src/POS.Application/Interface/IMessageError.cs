using POS.Application.DTO.Request.User;
using POS.Application.DTO.Response.User;
using POS.Domain.Entities;

namespace POS.Application.Interface;

public interface IMessageError
{
    Task<ErrorLoginResponseDto> Login(UserRequestDto user);
    Task<ErrorRegisterResponseDto> Register(User user);
}
