import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './admin/manage/manage.component';
import { CreateProjectComponent } from './admin/create-project/create-project.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';


const routes: Routes = [
  { path : '', component: ManageComponent },
  { path : 'create-project', component: CreateProjectComponent},
  { path : 'create-user', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
