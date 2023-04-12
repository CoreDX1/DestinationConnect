namespace POS.Infrastructure.Commons.Base.Request;

public class BasePaginationRequest
{
    public int NumPage { get; set; } = 1;
    public int NumRecordPage { get; set; } = 5;
    private int NumMaxRecordPage = 50;
    public string Order { get; set; } = "asc";
    public string Sort { get; set; } = string.Empty;

    public int Records
    {
        get => NumRecordPage;
        set { NumMaxRecordPage = (value > NumMaxRecordPage) ? NumMaxRecordPage : value; }
    }
}
