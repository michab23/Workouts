import { Component, OnInit } from '@angular/core';
import { Workout } from './../../_interface/workout.model';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../services/workout.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.scss']
})
export class WorkoutDetailsComponent implements OnInit {
  public workout: Workout;
  public showAccounts;

  constructor(private location: Location, private workoutService: WorkoutService, private router: Router, 
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getWorkoutDetails();
  }

  private getWorkoutDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/workout/${id}/account`;
 
    this.workoutService.get_workout(id)
    .subscribe(res => {
      this.workout = res as Workout;
    },
    (error => {
      //temporary as well
      this.location.back();
    })
    )
  }

}
