import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductAMDComponent } from './ProductManagement/product-amd/product-amd.component';
import { ProductListComponent } from './ProductManagement/product-list/product-list.component';
import { UserstListComponent } from './UsersManagement/userst-list/userst-list.component';
import { UsersamdComponent } from './UsersManagement/usersamd/usersamd.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAMDComponent,
    ProductListComponent,
    UserstListComponent,
    UsersamdComponent,
    DashboardComponent,
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
