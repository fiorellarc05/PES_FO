import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { MainHomeComponent } from './main-home/main-home.component';


const routes: Routes = [
  {path: 'main-home', component: MainHomeComponent},
  {path: 'log-in', component: LogInComponent},
  {path: '**', redirectTo: '/main-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
