import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutCreateComponent } from './workout/workout-create/workout-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: WorkoutCreateComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
