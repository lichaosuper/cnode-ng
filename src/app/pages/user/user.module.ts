import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 导入公共组件
import { PublicModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
// 该模块下的组件
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
// 路由
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    CommonModule,
    RouterModule,
    PublicModule,
    UserRoutingModule
  ],
  exports: [UserComponent,UserListComponent]
})
export class UserModule { }
