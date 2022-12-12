using Microsoft.EntityFrameworkCore;

namespace FB_CRUDMuebles.Models
{
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {


        }
        public DbSet<Muebless> Muebles { get; set; }


    }
}
