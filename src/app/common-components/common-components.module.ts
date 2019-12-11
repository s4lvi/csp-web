import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';



@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [MenuBarComponent]
})
export class CommonComponentsModule { }
