using System.Text.Json.Serialization;

namespace POS.Application.DTO.Response;

public class ErrorResponseDto
{
    public List<string>? Email { get; set; }
    public List<string>? Password { get; set; }
    public List<string>? FirstName { get; set; }
    public List<string>? LastName { get; set; }

    [JsonIgnore]
    public int ErrorCount
    {
        get { return Email!.Count() + Password!.Count(); }
    }
}
