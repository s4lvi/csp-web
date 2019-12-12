import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MenuBarComponent implements OnInit {

  public user: User = new User();

  constructor(public router: Router, 
    public authService: AuthenticationService,
    public changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.user)
  }

  ngDoCheck(): void {
    this.changeDetectionRef.detectChanges();
  }

  myProjects() {
    this.router.navigateByUrl('admin/projects');
  }

  newProject() {
    this.router.navigateByUrl('admin/create-project');
  }

  home() {
    this.router.navigateByUrl('admin');
  }

  logout() {
    //this.router.navigate(['auth'], { queryParams: {type: 'logout'}});
    this.user = {name: "testuser", role: Role.ADMIN, loggedIn: true};
    console.log(this.user);
  }

  login() {
    //this.router.navigate(['auth'], {queryParams: {type: 'login'}});
    this.user = {name: "testuser", role: Role.ADMIN, loggedIn: true};
    console.log(this.user);
    this.ngDoCheck();
  }
}

export class User {
  name: string;
  role: Role;
  loggedIn: boolean;

  constructor() {
    this.name = "testuser";
    this.role = Role.ADMIN;
    this.loggedIn = true;
  }
}

enum Role {
  ADMIN,
  USER
}