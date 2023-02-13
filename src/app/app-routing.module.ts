import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureBodyComponent } from './furniture-body/furniture-body.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddFurnitureComponent } from './add-furniture/add-furniture.component';
import { AccessFurnitureGuard } from './access-furniture.guard';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DisplayFurnitureComponent } from './display-furniture/display-furniture.component';

const routes: Routes=[
  {
    path: "home", component: FurnitureBodyComponent
  },
  {
    path: "", redirectTo:"home", pathMatch:"full"
  },
  {
  path: "register", component: RegisterUserComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"addfurnitrure", component: AddFurnitureComponent, canActivate:[AccessFurnitureGuard]
  },
  {
    path: "delete/:id", component: DisplayFurnitureComponent, canActivate:[AccessFurnitureGuard]
  },
  {
    path:"addtocart", component: AddToCartComponent, canActivate:[AccessFurnitureGuard]
  },
  {
    path: "**", component: PageNotFoundComponent
  }
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
