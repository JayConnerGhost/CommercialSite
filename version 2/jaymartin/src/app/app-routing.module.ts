import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AgileComponent } from './agile/agile.component';
import { CvComponent } from './cv/cv.component';
import { OpensourceComponent } from './opensource/opensource.component';


const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'agile', component:AgileComponent},
  {path: 'cv', component:CvComponent},
  {path: 'opensource', component:OpensourceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
