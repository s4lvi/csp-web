import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  user: User = {name: "", role: Role.USER, loggedIn: false};

  constructor(private router: Router, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.user)
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
    this.router.navigate(['auth'], { queryParams: {type: 'logout'}});
  }

  login() {
    this.router.navigate(['auth'], {queryParams: {type: 'login'}});
  }
}

interface User {
  name: string;
  role: Role;
  loggedIn: boolean;
}

enum Role {
  ADMIN,
  USER
}