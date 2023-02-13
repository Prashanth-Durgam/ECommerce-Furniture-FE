import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  username!:string;
  newname!:string;
  public logged:boolean=false;
   public adminlog:boolean=false;
  // public userlog:boolean=false;
  private url:string;
  constructor(private httpconnection:HttpClient) {
    this.url="http://localhost:8082/login";
   }

   


   login(loginData:any):Observable<any>{
    console.log(loginData);
    return this.httpconnection.post(this.url, loginData);
  }

  admin(name:any){
    this.username=name;
    this.newname=this.username.charAt(0).toUpperCase();
    this.adminlog=true;
    this.logged=true;
  }

  user(name:any){
    this.username=name;
    this.newname=this.username.charAt(0).toUpperCase();
    // this.userlog=true;
    this.logged=true;
  }

  logout(){
     this.logged=false;
    // this.userlog=false;
    this.adminlog=false;
  }
 

 
}
