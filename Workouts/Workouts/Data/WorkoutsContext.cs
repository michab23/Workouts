using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Workouts.Models;

namespace Workouts.Data
{
    public class WorkoutsContext : DbContext
    {
        public WorkoutsContext (DbContextOptions<WorkoutsContext> options)
            : base(options)
        {
        }

        public DbSet<Workouts.Models.Workout> Workout { get; set; }
    }
}
