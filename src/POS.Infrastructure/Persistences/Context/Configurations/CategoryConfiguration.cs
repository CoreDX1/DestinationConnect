using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POS.Domain.Entities;

namespace POS.Infrastructure.Persistences.Context.Configurations;

public class CategoryConfiguration : IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        builder.HasKey(e => e.Categoryid).HasName("categories_pkey");

        builder.ToTable("categories");

        builder.Property(e => e.Categoryid).HasColumnName("categoryid");
        builder
            .Property(e => e.Auditcreatedate)
            .HasColumnType("timestamp(6) without time zone")
            .HasColumnName("auditcreatedate");
        builder.Property(e => e.Auditcreateuser).HasColumnName("auditcreateuser");
        builder
            .Property(e => e.Auditdeletedate)
            .HasColumnType("timestamp(6) without time zone")
            .HasColumnName("auditdeletedate");
        builder.Property(e => e.Auditdeleteuser).HasColumnName("auditdeleteuser");
        builder
            .Property(e => e.Auditupdatedate)
            .HasColumnType("timestamp(6) without time zone")
            .HasColumnName("auditupdatedate");
        builder.Property(e => e.Auditupdateuser).HasColumnName("auditupdateuser");
        builder.Property(e => e.Description).HasColumnName("description");
        builder.Property(e => e.Name).HasMaxLength(100).HasColumnName("name");
        builder.Property(e => e.State).HasColumnName("state");
    }
}
