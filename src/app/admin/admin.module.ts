import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageComponent } from './manage/manage.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule} from '@angular/material/';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [CreateProjectComponent, CreateUserComponent, ManageComponent, ProjectListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AdminModule { }
