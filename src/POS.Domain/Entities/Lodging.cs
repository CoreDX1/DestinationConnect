using System;
using System.Collections.Generic;

namespace POS.Domain.Entities;

public partial class Lodging
{
    public int Id { get; set; }

    public string? Locality { get; set; }

    public DateTime? DateStart { get; set; }

    public DateTime? DateEnd { get; set; }

    public int? Rooms { get; set; }

    public int? Capacity { get; set; }

    public int? State { get; set; }

    public int? Price { get; set; }

    public string? Description { get; set; }

    public string? LodgingType { get; set; }

    public int? Rating { get; set; }
}
