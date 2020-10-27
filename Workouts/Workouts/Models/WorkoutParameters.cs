using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Workouts.Models
{
    public class WorkoutParameters
    {
        const int maxPageSize = 2;
        public int PageNumber { get; set; } = 1;
        private int _pageSize = 2;
        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = (value > maxPageSize) ? maxPageSize : value;
            }
        }

        public DateTime fromDate { get; set; }

        public DateTime toDate { get; set; }
    }
}
