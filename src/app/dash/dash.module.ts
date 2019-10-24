import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashPage } from './dash.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashPage,
    children: [
      {path: 'signout', loadChildren: '../signout/signout.module#SignoutPageModule'},
      { path: 'orderdetail', loadChildren: '../orderdetail/orderdetail.module#OrderdetailPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashPage]
})
export class DashPageModule {
}
