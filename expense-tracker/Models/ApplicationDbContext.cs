using ExpenseTracker.Models;
using Microsoft.EntityFrameworkCore;

namespace expense_tracker.Models;
{
    public class ApplicationDbContext
    {
        public ApplicationDbContext()
        {
            
        }

        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}