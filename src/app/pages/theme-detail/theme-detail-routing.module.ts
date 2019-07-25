import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeDetailComponent } from './theme-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ThemeDetailComponent,
    children: [
      {
        path: ':id',
        component: ThemeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeDetailRoutingModule { }