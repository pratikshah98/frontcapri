import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { UserAuthguardService } from './user-authguard.service';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'homepage',component:HomepageComponent,canActivate:[UserAuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
