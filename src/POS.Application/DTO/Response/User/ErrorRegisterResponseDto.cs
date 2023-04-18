using System.Text.Json.Serialization;

namespace POS.Application.DTO.Response.User;

public class ErrorRegisterResponseDto
{
    public List<string>? Email { get; set; }
    public List<string>? Password { get; set; }
    public List<string>? FirstName { get; set; }
    public List<string>? LastName { get; set; }

    [JsonIgnore]
    public int ErrorCount
    {
        get { return Email!.Count() + Password!.Count() + FirstName!.Count() + LastName!.Count(); }
    }
}
