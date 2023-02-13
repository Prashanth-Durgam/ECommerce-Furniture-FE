import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureServiceService {
  
  private url:string;
  private url1:string;
  private url2:string;
  constructor(private httpconnection:HttpClient) {
    this.url="http://localhost:8083/furniture";
    this.url1="http://localhost:8083/savefurniture"
    this.url2="http://localhost:8083/delete"
   }
  getAllFurnitures():Observable<any>
  {
   // console.log(this.httpconnection.get<any>(this.url));
    return this.httpconnection.get<any>(this.url);
  }

  addFurnitures(data:any){

    return this.httpconnection.post(this.url1, data);
  }

  deleteFurniture(id: any){
    alert(id);
    return this.httpconnection.delete(this.url2+"/"+id);
  }


}
