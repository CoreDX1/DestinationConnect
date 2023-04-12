using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POS.Domain.Entities;

namespace POS.Infrastructure.Persistences.Context.Configurations;

public class LodgingConfiguration : IEntityTypeConfiguration<Lodging>
{
    public void Configure(EntityTypeBuilder<Lodging> builder)
    {
        builder.HasKey(e => e.Id).HasName("lodging_pkey");

        builder.ToTable("lodging");

        builder.Property(e => e.Id).HasColumnName("id");
        builder.Property(e => e.Capacity).HasColumnName("capacity");
        builder.Property(e => e.DateEnd).HasColumnName("date_end");
        builder.Property(e => e.DateStart).HasColumnName("date_start");
        builder.Property(e => e.Description).HasColumnName("description");
        builder.Property(e => e.Locality).HasMaxLength(50).HasColumnName("locality");
        builder.Property(e => e.LodgingType).HasMaxLength(50).HasColumnName("lodging_type");
        builder.Property(e => e.Price).HasColumnName("price");
        builder.Property(e => e.Rating).HasColumnName("rating");
        builder.Property(e => e.Rooms).HasColumnName("rooms");
        builder.Property(e => e.State).HasColumnName("state");
    }
}
