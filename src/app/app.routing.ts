import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ReviewLayoutComponent } from './layouts/review-layout/review-layout.component';
import { SharedModule } from 'shared/shared.module';
import { CryptoLayoutComponent } from './layouts/crypto-layout/crypto-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }, {
    path: '',
    component: ReviewLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/review-layout/review-layout.module').then(m => m.ReviewLayoutModule)
    }]
  }, {
    path: '',
    component: CryptoLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/crypto-layout/crypto-layout.module').then(m => m.CryptoLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
