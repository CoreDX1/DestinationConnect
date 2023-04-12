using System;
using System.Collections.Generic;

namespace POS.Domain.Entities;

public partial class Lodging
{
    public int Id { get; set; }

    public string? Locality { get; set; }

    public DateOnly? DateStart { get; set; }

    public DateOnly? DateEnd { get; set; }

    public int? Rooms { get; set; }

    public int? Capacity { get; set; }

    public int? State { get; set; }

    public int? Price { get; set; }

    public string? Description { get; set; }

    public string? LodgingType { get; set; }

    public int? Rating { get; set; }
}
