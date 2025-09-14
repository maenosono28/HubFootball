using Microsoft.EntityFrameworkCore;
using HubFootball.Models;

namespace HubFootball.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Player> Players { get; set; }
}