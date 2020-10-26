import { WorkoutService } from '../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { WorkoutForCreation } from '../../_interface/workout-for-creation.model';

@Component({
  selector: 'app-workout-create',
  templateUrl: './workout-create.component.html',
  styleUrls: ['./workout-create.component.scss']
})
export class WorkoutCreateComponent implements OnInit {
  public workoutForm: FormGroup;

  constructor(private location: Location, private workoutService: WorkoutService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.workoutForm = new FormGroup({
      workoutDate: new FormControl(new Date()),
      distanceInMeters: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      timeInSeconds: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.workoutForm.controls[controlName].hasError(errorName);
  }
  public onCancel = () => {
    this.location.back();
  }

  public createWorkout = (workoutFormValue) => {
    if (this.workoutForm.valid) {
      this.executeWorkoutCreation(workoutFormValue);
    }
  }

  private executeWorkoutCreation = (workoutFormValue) => {
    let workout: WorkoutForCreation = {
      date: workoutFormValue.workoutDate,
      distanceInMeters: workoutFormValue.distanceInMeters,
      timeInSeconds: workoutFormValue.timeInSeconds
    }

    let apiUrl = 'api/owner';
    this.workoutService.add(workout)
      .subscribe(res => {
        //this is temporary, until we create our dialogs
        this.location.back();
      },
      (error => {
        //temporary as well
        this.location.back();
      })
    )
  }
 
}
