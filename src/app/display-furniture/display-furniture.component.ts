import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../Service/login-service.service';
import { FurnitureServiceService } from '../Service/furniture-service.service';

@Component({
  selector: 'app-display-furniture',
  templateUrl: './display-furniture.component.html',
  styleUrls: ['./display-furniture.component.css']
})
export class DisplayFurnitureComponent implements OnInit { 

  @Input()
  newFurnitues!:any[];

  constructor(private dbservice:FurnitureServiceService, private route:Router, public loginservice:LoginServiceService, private ar:ActivatedRoute) { }

  // addtocarts(){
  //   if(this.loginservice.userlog){
  //   this.route.navigateByUrl("/addtocart");}
  // }

  ngOnInit(): void {

    this.ar.paramMap.subscribe(param=>{
      let id=param.get("id");
      if(id!=null){
        this.dbservice.deleteFurniture(id).subscribe(()=>{
          alert("The Furniture is deleted");
        })
        this.route.navigateByUrl("home");
      }
      else{
        this.route.navigateByUrl("home");
      }
    })
 
  }

}
