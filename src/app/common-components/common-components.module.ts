import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { RouterModule, RouterState } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';



@NgModule({
  declarations: [MenuBarComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [MenuBarComponent]
})
export class CommonComponentsModule { }
