import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridJoggingComponent } from './grid-jogging.component';

describe('GridJoggingComponent', () => {
  let component: GridJoggingComponent;
  let fixture: ComponentFixture<GridJoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridJoggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridJoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
