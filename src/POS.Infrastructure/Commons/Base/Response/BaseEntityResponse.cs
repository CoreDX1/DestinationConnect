namespace POS.Infrastructure.Commons.Base.Response;

public class BaseEntityResponse<T>
{
    public int? TotalRecords { get; set; }
    public int? TotalPages { get; set; }
    public List<T>? Items { get; set; }
}
