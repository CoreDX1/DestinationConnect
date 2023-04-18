namespace POS.Application.Commons.Base;

public class BaseResponse<T>
{
    public bool Success { get; set; }
    public T? Data { get; set; }
    public string? Message { get; set; }
    public BaseResponseError? Errors { get; set; }

    public BaseResponse()
    {
        Errors = new BaseResponseError();
    }
}
