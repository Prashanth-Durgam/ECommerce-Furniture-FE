import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationServiceService } from '../Service/registration-service.service';
import { Route, Router } from '@angular/router';
import { AnimationDurations } from '@angular/material/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

 
  message:string="Thank-you for your Registration"
  success:string="successful";

  failure:string="Sorry"
  message2:string="Email already registered with us try login"
  
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private registration :RegistrationServiceService, private route:Router) { 
   // this.userDetails.patchValue({firstName:'Ex: Prashanth',lastName:'pagadala',email:'pagadala@gmail.com'})
  }

  userDetails=this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]{0,}")]],
    lastName:['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]{0,}")]],
    email:['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
    password:['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    cPassword:[''],
    usertype: [''],
    phoneNumber:['', [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]]
  },{validators: this.checkPassword});



  checkPassword(fc:AbstractControl):ValidationErrors|null{
    var password1=fc.get('password')?.value;
    var confirmPassword=fc.get('cPassword')?.value;
    if(confirmPassword==""){
      return {passwordmatch1:false}
    }
    else if(password1!=confirmPassword){
      return {passwordmatch2:false};
    }
    return null;
  }

  get firstName() { return this.userDetails.get("firstName") }
  get lastName() { return this.userDetails.get("lastName") }
  get email() { return this.userDetails.get("email") }
  get password() { return this.userDetails.get("password") }
  get cPassword() { return this.userDetails.get("cPassword") }
  get usertype(){ return this.userDetails.get("usertype")}
  get phoneNumber() { return this.userDetails.get("phoneNumber") }
 
  openSnackBar(message: string, action: string) {
    console.log(this.userDetails);
    // this.addingRegistration.emit(this.userDetails.value);
    this.registration.addReg(this.userDetails.value).subscribe(
      ()=>{alert("Registration is Inserted"), this._snackBar.open(message, action, {duration:2000})},
      (err:Error)=>{alert("User Already Exists in Database");this._snackBar.open(this.message2, this.failure), console.log(err.message)}
     );
    this.route.navigateByUrl("/login");
    // this._snackBar.open(message, action);
  }

  ngOnInit(): void {
  }

}
