import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 导入公共组件
import { PublicModule } from '../../common/shared.module';
// 该模块下的组件
import { MainComponent } from './main.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightListComponent } from './right-list/right-list.component';
// 需要引入子路由模块，路由分发才会生效
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [MainComponent, RightListComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    PublicModule
  ],
  exports: [
    MainComponent,
    RightListComponent,
    LeftMenuComponent
  ]
})
export class MainModule { }
