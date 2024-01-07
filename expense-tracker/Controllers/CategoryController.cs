using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using expense_tracker.Models;

namespace expense_tracker.Controllers
{
    public class CategoryController : Controller
    {
        private readonly ApplicationDbContext _context; // _context is private readonly field

        public CategoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Action methods
    }
}