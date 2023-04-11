using POS.Application.Commons.Base;
using POS.Application.DTO.Request;
using POS.Domain.Entities;

namespace POS.Application.Interface;

public interface IUserApplication
{
    Task<BaseResponse<bool>> Register(User user);
    Task<BaseResponse<string>> Login(UserRequestDto user);
}
