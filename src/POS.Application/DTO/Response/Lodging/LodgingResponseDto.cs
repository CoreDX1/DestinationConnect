namespace POS.Application.DTO.Response.Lodging;

public class LodgingResponseDto
{
    public int Id { get; set; }
    public string? Locality { get; set; }
    public string? LodgingType { get; set; }
    public string? Description { get; set; }
    public DateTime DateStart { get; set; }
    public DateTime? DateEnd { get; set; }
    public int State { get; set; }
}
