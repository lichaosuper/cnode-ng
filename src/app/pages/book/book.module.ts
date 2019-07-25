import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 导入公共组件
import { PublicModule } from '../../common/shared.module';
// 该模块下的组件
import { BookComponent } from './book.component';
// 路由
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    PublicModule,
    BookRoutingModule
  ],
  exports: [BookComponent]
})
export class BookModule { }
