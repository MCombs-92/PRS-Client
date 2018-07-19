import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from '@user/user-detail/user-detail.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';
import { UserEditComponent } from '@user/user-edit/user-edit.component';
import { UserListComponent } from '@user/user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: UserListComponent},
  {path:"create", component: UserCreateComponent},
  {path: 'detail', component: UserDetailComponent},
  {path: 'edit', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
