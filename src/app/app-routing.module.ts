import { NgModule } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"updateProduct/:id",component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
