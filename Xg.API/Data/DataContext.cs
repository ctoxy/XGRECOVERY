using Microsoft.EntityFrameworkCore;
using Xg.API.Models;

namespace Xg.API.Data
{
    public class DataContext : DbContext
    {
       public DataContext(DbContextOptions<DataContext> options) : base(options) {} 

       public DbSet<Value> Values {get;set;}
    }
}