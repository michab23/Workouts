import { WorkoutService } from '../services/workout.service';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Workout } from '../_interface/workout.model';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.scss']
})

export class GridJoggingComponent implements OnInit, AfterViewInit {
  @Input() joggingData: Array<any>;

  public displayedColumns = ['id', 'date', 'distanceInMeters', 'timeInSeconds', 'details', 'update', 'delete'];

  public dataSource = new MatTableDataSource<Workout>();

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getAllworkouts();
  }
 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllworkouts = () => {
    this.workoutService.get()
    .subscribe(res => {
      this.dataSource.data = res as Workout[];
    })
  }

  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
