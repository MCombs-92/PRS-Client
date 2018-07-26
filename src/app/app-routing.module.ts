import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent} from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';

import { RequestLinesListComponent } from './request-lines/request-lines-list/request-lines-list.component';
import { RequestLinesCreateComponent } from './request-lines/request-lines-create/request-lines-create.component';
import { RequestLinesEditComponent } from './request-lines/request-lines-edit/request-lines-edit.component';
import { RequestLinesDetailComponent } from './request-lines/request-lines-detail/request-lines-detail.component';


import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'users/list', component: UserListComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'users/edit/:id', component: UserEditComponent},

  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},

  {path: 'products/list', component: ProductListComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},

  {path: 'requests/list', component: RequestListComponent},
  {path: 'requests/create', component: RequestCreateComponent},
  {path: 'requests/edit/:id', component: RequestEditComponent},
  {path: 'requests/detail/:id', component: RequestDetailComponent},
  {path: 'requests/lines/:prid', component: RequestLinesComponent},

  {path: 'requestlines/list', component: RequestLinesListComponent},
  {path: 'requestlines/create/:prid', component: RequestLinesCreateComponent},
  {path: 'requestlines/edit/:id', component: RequestLinesEditComponent},
  {path: 'requestlines/detail/:id', component: RequestLinesDetailComponent},

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
