import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public joggingData: Array<any>;
  public currentJogging: any;

  constructor(private workoutService: WorkoutService) {
    workoutService.get().subscribe((data: any) => this.joggingData = data);
  }

  ngOnInit(): void {
  }

}
