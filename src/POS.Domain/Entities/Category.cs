namespace POS.Domain.Entities;

public partial class Category
{
    public int Categoryid { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public int Auditcreateuser { get; set; }

    public DateTime Auditcreatedate { get; set; }

    public int? Auditupdateuser { get; set; }

    public DateTime? Auditupdatedate { get; set; }

    public int? Auditdeleteuser { get; set; }

    public DateTime? Auditdeletedate { get; set; }

    public int State { get; set; }
}
