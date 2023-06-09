using System.Text.Json.Serialization;

namespace POS.Application.DTO.Response.User;

public class ErrorLoginResponseDto
{
    public List<string>? Email { get; set; }
    public List<string>? Password { get; set; }

    [JsonIgnore]
    public int ErrorCount
    {
        get { return Email!.Count() + Password!.Count(); }
    }
}
