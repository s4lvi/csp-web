import { Component, OnInit } from '@angular/core';
import { RouterState, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  type: string;

  constructor(public route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.queryParams.pipe().subscribe(p => {
      console.log(p);
      if (p.type == "login") {
        console.log("login");
      }
      if (p.type == "logout") {
        console.log("logout");
      }
    });
  }

}
