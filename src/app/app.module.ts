import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductAMDComponent } from './ProductManagement/product-amd/product-amd.component';
import { ProductListComponent } from './ProductManagement/product-list/product-list.component';
import { UserstListComponent } from './UsersManagement/userst-list/userst-list.component';
import { UsersamdComponent } from './UsersManagement/usersamd/usersamd.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { CategoryProductListComponent } from './ProductManagement/category-product-list/category-product-list.component';
import { CategoryProductAmdComponent } from './ProductManagement/category-product-amd/category-product-amd.component';
import { UsersTypeListComponent } from './ProductManagement/users-type-list/users-type-list.component';
import { UsersTypeAmdComponent } from './ProductManagement/users-type-amd/users-type-amd.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAMDComponent,
    ProductListComponent,
    UserstListComponent,
    UsersamdComponent,
    DashboardComponent,
    CategoryProductListComponent,
    CategoryProductAmdComponent,
    UsersTypeListComponent,
    UsersTypeAmdComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
