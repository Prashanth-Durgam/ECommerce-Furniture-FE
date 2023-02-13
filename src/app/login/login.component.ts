import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginServiceService } from '../Service/login-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  failure:string="Sorry"
  message2:string="Email not registered with us try login"

  loginform=this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]]});

    get email() { return this.loginform.get("email") }

  constructor(private fb:FormBuilder, private loginService:LoginServiceService, private _snackBar: MatSnackBar, private route:Router){}

  response:any;

  name:any;

  OnLogin(){
    this.loginService.login(this.loginform.value).subscribe(
      x=>{
       this.name=this.email;
        this.response=x;
        console.log(this.response.token);
        console.log(this.response.usertype);
        console.log(this.response.message);
        localStorage.setItem("jwtToken",this.response.token);
        localStorage.setItem("role", this.response.userType);
        if(this.response.usertype=="admin"){
          this.loginService.admin(this.name.value);
          this.route.navigateByUrl("home");
        }else{
          this.loginService.user(this.name.value);
          this.route.navigateByUrl("home");
        }
      }, (err:Error)=>{ 
       console.log(err.message)
        if(err.message.endsWith("404 OK")){
          alert ("User Not Exists")
        }else{
        alert("Password and email Not matched")}
        }
    )
    }
    
  ngOnInit(): void {
  }

}
