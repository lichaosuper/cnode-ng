import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 导入公共组件
import { PublicModule } from '../../common/shared.module';
// 该模块下的组件
import { AboutComponent } from './about.component';
// 路由
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    PublicModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
