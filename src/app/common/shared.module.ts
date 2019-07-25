import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 使用routerLink需导入RouterModule
import { RouterModule } from '@angular/router';
// ant
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// 所有自定义的公共模块
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PublicCardComponent } from './public-card/public-card.component';
import { TxtTagComponent } from './txt-tag/txt-tag.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, PublicCardComponent, TxtTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    // ant，本模块内的组件想要用ui库就必须导入，否则报错，下面的exports是导出给其他模块使用的
    NzListModule,
    NzTagModule,
    NzCardModule,
    NzAvatarModule,
    NzGridModule,
    NzLayoutModule,
    NzPaginationModule,
    NzMenuModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PublicCardComponent,
    TxtTagComponent,
    // ant
    NzListModule,
    NzTagModule,
    NzCardModule,
    NzAvatarModule,
    NzGridModule,
    NzLayoutModule,
    NzPaginationModule,
    NzMenuModule
  ]
})
export class PublicModule { }
