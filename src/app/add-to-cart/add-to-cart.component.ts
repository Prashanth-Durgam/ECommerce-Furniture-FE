import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  success:string="Success"
  message1:string="Selected Item added to cart"

  addtocart=this.fb.group({
    itemQty:['', [Validators.required]],
    itemSize:['', [Validators.required]]});

    get itemQty() { return this.addtocart.get("itemQty") }
    get itemSize() { return this.addtocart.get("itemSize") }

  
    onSubmit(){
      alert(this.itemQty?.value);
      alert(this.itemSize?.value);
      this._snackBar.open(this.message1, this.success);
      this.route.navigateByUrl("/home")
    }

  constructor(private fb:FormBuilder, private route:Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
