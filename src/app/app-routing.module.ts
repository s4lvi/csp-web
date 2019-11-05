import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './admin/create-project/create-project.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { AppComponent } from './app.component';
import { ManageComponent } from './admin/manage/manage.component';
import { DlcAnnotateComponent } from './portal/dlc-annotate/dlc-annotate.component';

const routes: Routes = [
  { path : '', component: AppComponent },
  { path : 'admin/create-project', component: CreateProjectComponent},
  { path : 'admin/create-user', component: CreateUserComponent},
  { path : 'admin/manage', component: ManageComponent},
  { path : 'admin', redirectTo: 'admin/manage'},
  { path : 'portal/dlc', component: DlcAnnotateComponent},
  { path : 'portal', redirectTo: 'portal/dlc'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
