using POS.Application.DTO.Response.User;

namespace POS.Application.Commons.Base;

public class BaseResponseError
{
    public ErrorLoginResponseDto? Login { get; set; }
    public ErrorRegisterResponseDto? Register { get; set; }
}
