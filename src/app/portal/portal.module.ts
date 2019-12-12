import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlcAnnotateComponent } from './dlc-annotate/dlc-annotate.component';
import { MenuBarComponent } from '../common-components/menu-bar/menu-bar.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { DlcService } from './dlc-annotate/dlc.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DlcAnnotateComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule
  ],
  providers: [DlcService, HttpClient]
})
export class PortalModule { }
