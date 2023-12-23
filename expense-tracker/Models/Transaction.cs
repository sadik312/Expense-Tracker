using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ExpenseTracker.Models;

namespace expense_tracker.Models
{
    public class Transaction
    {
        // Primary key
        [Key]
        public int TransactionId { get; set; }

        // CategoryId - Primary Key from Category.cs
        public int CategoryId { get; set; }

        // Specifying foreign key relation between this table and category.cs table
        // Syntax for keys using Entity Framework Core
        public Category Category { get; set; }
        public int Amount { get; set; }
        [Column(TypeName = "nvarchar(75)")]
        public string? Note { get; set; }
        public DateTime Date { get; set; } = DateTime.Now; // <- setting default property type

    }
}