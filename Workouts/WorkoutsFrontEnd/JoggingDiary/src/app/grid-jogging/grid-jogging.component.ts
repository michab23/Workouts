import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.scss']
})
export class GridJoggingComponent implements OnInit {
  @Input() joggingData: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
