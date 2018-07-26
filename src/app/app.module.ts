import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { SortPipe } from './Utility/sort.pipe';
import { BoolPipe } from './Utility/bool.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestLinesListComponent } from './request-lines/request-lines-list/request-lines-list.component';
import { RequestLinesCreateComponent } from './request-lines/request-lines-create/request-lines-create.component';
import { RequestLinesEditComponent } from './request-lines/request-lines-edit/request-lines-edit.component';
import { RequestLinesDetailComponent } from './request-lines/request-lines-detail/request-lines-detail.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    HomeComponent,
    NavComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    SortPipe,
    BoolPipe,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestLinesListComponent,
    RequestLinesCreateComponent,
    RequestLinesEditComponent,
    RequestLinesDetailComponent,
    RequestLinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
