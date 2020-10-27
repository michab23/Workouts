import { Workout } from './../../../_interface/workout.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../../services/workout.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workout-data',
  templateUrl: './workout-data.component.html',
  styleUrls: ['./workout-data.component.scss']
})
export class WorkoutDataComponent implements OnInit {
  @Input() public workout: Workout;
  public selectOptions = [{name:'Show', value: 'show'}, {name: `Don't Show`, value: ''}];
  @Output() selectEmitt = new EventEmitter();
  
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

  public onCancel = () => {
    this.location.back();
  }
  public onChange = (event) => {
    this.selectEmitt.emit(event.value);
  }

}
