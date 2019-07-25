import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  // 懒加载
  {
    path: 'main/:aid',
    component: MainComponent
  },
  {
    path: 'book',
    loadChildren: () => import('./pages/book/book.module').then(mod => mod.BookModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'user/:aid',
    loadChildren: () => import('./pages/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'themedetail/:aid',
    loadChildren: () => import('./pages/theme-detail/theme-detail.module').then(mod => mod.ThemeDetailModule)
  },
  /*
  * 表示初始时页面路由为空跳转到首页
  * pathMatch?: string; 默认为前缀匹配 "prefix"; "full" 为完全匹配
  */ 
  {
    path: '',
    redirectTo: 'main/all',
    pathMatch: 'full'
  },
  // 用户访问无效网址时跳转到首页
  {
    path: '**',
    redirectTo: 'main/all'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
