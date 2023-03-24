using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POS.Domain.Entities;

namespace POS.Infrastructure.Persistences.Context.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(e => e.Id).HasName("users_pkey");

        builder.ToTable("users");

        builder.HasIndex(e => e.Email, "users_email_key").IsUnique();

        builder.Property(e => e.Id).HasColumnName("id");
        builder.Property(e => e.Email).HasMaxLength(100).HasColumnName("email");
        builder.Property(e => e.FirstName).HasMaxLength(100).HasColumnName("first_name");
        builder.Property(e => e.LastName).HasMaxLength(100).HasColumnName("last_name");
        builder.Property(e => e.Password).HasMaxLength(100).HasColumnName("password");
    }
}
