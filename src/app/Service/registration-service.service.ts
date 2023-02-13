import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  private url:string;

  constructor(private httpconnection:HttpClient) {
    this.url="http://localhost:8082/register";
   }

  addReg(regData:any):Observable<any>{
    console.log(regData);
    return this.httpconnection.post(this.url, regData);
  }


}
