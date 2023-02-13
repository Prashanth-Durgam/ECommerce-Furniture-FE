import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Service/login-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FurnitureServiceService } from '../Service/furniture-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrls: ['./add-furniture.component.css']
})
export class AddFurnitureComponent implements OnInit {


  message:string="Funiture Added"
  success:string="successful";

  failure:string="Sorry"
  message2:string="Furniture Already Exists"

  addfurniture=this.fb.group({
    title:['', [Validators.required]],
    image:['', [Validators.required]],
    price:['', [Validators.required]]});
  

  addFurniture(){
    this.dbconnection.addFurnitures(this.addfurniture.value).subscribe(
      ()=>{alert("Furniture is Inserted"), 
          this._snackBar.open(this.message, this.success),
          this.route.navigateByUrl("")},
      (err:Error)=>{alert("Furniture Already Exists in Database");
                        this._snackBar.open(this.message2, this.failure), 
                        console.log(err.message)}
     );
     
  }

  constructor(private fb:FormBuilder, private dbconnection:FurnitureServiceService, private route:Router, private _snackBar: MatSnackBar) {
   }
  ngOnInit(): void {
    
    }
    

}
