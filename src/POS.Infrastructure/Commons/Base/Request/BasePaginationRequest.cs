namespace POS.Infrastructure.Commons.Base.Request;

public class BasePaginationRequest
{
    public int NumPage { get; set; } = 1;
    public int NumRecordPage { get; set; } = 10;
    private readonly int NumMaxRecordPage = 50;
    public string Order { get; set; } = "asc";
    public string? Sort { get; set; } = null;

    public int Records
    {
        get => NumRecordPage;
        set => NumRecordPage = value < NumMaxRecordPage ? value : NumMaxRecordPage;
    }
}
