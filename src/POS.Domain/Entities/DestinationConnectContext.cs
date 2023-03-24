using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace POS.Domain.Entities;

public partial class DestinationConnectContext : DbContext
{
    public DestinationConnectContext(DbContextOptions<DestinationConnectContext> options)
        : base(options) { }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Categoryid).HasName("categories_pkey");

            entity.ToTable("categories");

            entity.Property(e => e.Categoryid).HasColumnName("categoryid");
            entity
                .Property(e => e.Auditcreatedate)
                .HasColumnType("timestamp(6) without time zone")
                .HasColumnName("auditcreatedate");
            entity.Property(e => e.Auditcreateuser).HasColumnName("auditcreateuser");
            entity
                .Property(e => e.Auditdeletedate)
                .HasColumnType("timestamp(6) without time zone")
                .HasColumnName("auditdeletedate");
            entity.Property(e => e.Auditdeleteuser).HasColumnName("auditdeleteuser");
            entity
                .Property(e => e.Auditupdatedate)
                .HasColumnType("timestamp(6) without time zone")
                .HasColumnName("auditupdatedate");
            entity.Property(e => e.Auditupdateuser).HasColumnName("auditupdateuser");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.Name).HasMaxLength(100).HasColumnName("name");
            entity.Property(e => e.State).HasColumnName("state");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("users_pkey");

            entity.ToTable("users");

            entity.HasIndex(e => e.Email, "users_email_key").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email).HasMaxLength(100).HasColumnName("email");
            entity.Property(e => e.FirstName).HasMaxLength(100).HasColumnName("first_name");
            entity.Property(e => e.LastName).HasMaxLength(100).HasColumnName("last_name");
            entity.Property(e => e.Password).HasMaxLength(100).HasColumnName("password");
            entity
                .Property(e => e.RegistrationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("registration_date");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
