import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlcAnnotateComponent } from './dlc-annotate/dlc-annotate.component';
import { UserBarComponent } from './user-bar/user-bar.component';



@NgModule({
  declarations: [DlcAnnotateComponent, UserBarComponent],
  imports: [
    CommonModule
  ]
})
export class PortalModule { }
