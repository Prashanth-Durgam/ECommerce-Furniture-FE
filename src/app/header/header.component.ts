import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Service/login-service.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public login:LoginServiceService, private route:Router) { }
  

  ngOnInit(): void {
  
  }

  logout(){
    this.login.logout();
    this.route.navigateByUrl("");
  }

}
