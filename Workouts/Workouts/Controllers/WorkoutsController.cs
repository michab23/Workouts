using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Workouts.Data;
using Workouts.Models;

namespace Workouts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        private readonly WorkoutsContext _context;

        public WorkoutsController(WorkoutsContext context)
        {
            _context = context;
        }

        // GET: api/Workouts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workout>>> GetWorkout([FromQuery] WorkoutParameters workoutParameters)
        {
            return await _context.Workout
                    //.OrderBy(on => on.Date)
                    //.Skip((workoutParameters.PageNumber - 1) * workoutParameters.PageSize)
                    //.Take(workoutParameters.PageSize)
                    .ToListAsync();
        }

        // GET: api/workouts/paging?pageNumber=2&pageSize=2
        [HttpGet("Paging")]
        public async Task<ActionResult<IEnumerable<Workout>>> PagingWorkout([FromQuery] WorkoutParameters workoutParameters)
        {
            return await _context.Workout
                     .OrderBy(on => on.Date)
                     .Skip((workoutParameters.PageNumber - 1) * workoutParameters.PageSize)
                     .Take(workoutParameters.PageSize)
                     .ToListAsync();
        }

        // GET: api/workouts/search_date_range?fromDate=01/01/2019&toDate=01/01/2020
        [HttpGet("search_date_range")]
        public async Task<ActionResult<IEnumerable<Workout>>> SearchWorkoutDateRange([FromQuery] WorkoutParameters workoutParameters)
        {
            return await _context.Workout
                    .OrderBy(on => on.Date)
                    .Where(on => on.Date >= workoutParameters.fromDate &&
                                on.Date <= workoutParameters.toDate)
                    .ToListAsync();
        }

        // GET: api/Workouts/search_by_name?runnerName=מוטי
        [HttpGet("search_by_name")]
        public async Task<ActionResult<IEnumerable<Workout>>> SearchWorkoutRunnerName([FromQuery] WorkoutParameters workoutParameters)
        {
            return await _context.Workout
                    .OrderBy(on => on.Date)
                    .Where(on => on.RunnerName.ToLower().Contains(workoutParameters.runnerName.Trim().ToLower()))
                    .ToListAsync();
        }

        // GET: api/Workouts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Workout>> GetWorkout(int id)
        {
            var workout = await _context.Workout.FindAsync(id);

            if (workout == null)
            {
                return NotFound();
            }

            return workout;
        }

        // PUT: api/Workouts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkout(int id, Workout workout)
        {
            if (id != workout.Id)
            {
                return BadRequest();
            }

            _context.Entry(workout).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkoutExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Workouts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Workout>> PostWorkout(Workout workout)
        {
            _context.Workout.Add(workout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkout", new { id = workout.Id }, workout);
        }

        // DELETE: api/Workouts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Workout>> DeleteWorkout(int id)
        {
            var workout = await _context.Workout.FindAsync(id);
            if (workout == null)
            {
                return NotFound();
            }

            _context.Workout.Remove(workout);
            await _context.SaveChangesAsync();

            return workout;
        }

        private bool WorkoutExists(int id)
        {
            return _context.Workout.Any(e => e.Id == id);
        }

        
    }
}
