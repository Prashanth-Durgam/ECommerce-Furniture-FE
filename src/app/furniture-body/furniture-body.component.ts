import { Component, OnInit } from '@angular/core';
import { FurnitureServiceService } from '../Service/furniture-service.service';

@Component({
  selector: 'app-furniture-body',
  templateUrl: './furniture-body.component.html',
  styleUrls: ['./furniture-body.component.css']
})
export class FurnitureBodyComponent implements OnInit {

  constructor(private dbconnection:FurnitureServiceService) { }

  furnitues!:any[];

  getFurnitures(){
    this.dbconnection.getAllFurnitures().subscribe((x:any)=>this.furnitues=x);
   }


  ngOnInit(): void {
    this.getFurnitures();
  }

}
