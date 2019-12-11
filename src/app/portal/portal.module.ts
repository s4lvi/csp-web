import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlcAnnotateComponent } from './dlc-annotate/dlc-annotate.component';
import { MenuBarComponent } from '../common-components/menu-bar/menu-bar.component';
import { CommonComponentsModule } from '../common-components/common-components.module';



@NgModule({
  declarations: [DlcAnnotateComponent],
  imports: [
    CommonModule,
    CommonComponentsModule
  ]
})
export class PortalModule { }
