import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBarComponent } from './user-bar/user-bar.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';



@NgModule({
  declarations: [UserBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [UserBarComponent]
})
export class CommonComponentsModule { }
