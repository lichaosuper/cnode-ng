import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 导入公共组件
import { PublicModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
import { ThemeDetailComponent } from './theme-detail.component';
// 路由
import { ThemeDetailRoutingModule } from './theme-detail-routing.module';





@NgModule({
  declarations: [ThemeDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    PublicModule,
    ThemeDetailRoutingModule
  ],
  exports: [ThemeDetailComponent]
})
export class ThemeDetailModule { }
