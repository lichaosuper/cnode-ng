import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// 审查路由器配置接入的模块(审查完删除)
import { Router } from '@angular/router';
// 需额外使用npm install @angular/http --save导入
import { HttpModule } from "@angular/http";

// 自定义module
import { MainModule } from './pages/main/main.module';

// 自定义service
import { MainService } from './services/main/main.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule,
    // 自定义module
    MainModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // 审查路由器配置(审查完删除)
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
