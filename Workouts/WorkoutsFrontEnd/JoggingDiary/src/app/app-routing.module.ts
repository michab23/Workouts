import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutCreateComponent } from './workout/workout-create/workout-create.component';
import { WorkoutDataComponent} from './workout/workout-details/workout-data/workout-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: WorkoutCreateComponent },
  { path: 'details/:id', component: WorkoutDataComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
