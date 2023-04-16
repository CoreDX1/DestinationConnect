namespace POS.Infrastructure.Commons.Base.Request;

public class BaseFiltersRequest : BasePaginationRequest
{
    public int? NumFilters { get; set; } = null;
    public string? TextFilter { get; set; } = null;
    public int? StateFilter { get; set; } = 1;
    public string? StartData { get; set; } = null;
    public string? EndData { get; set; } = null;
}
