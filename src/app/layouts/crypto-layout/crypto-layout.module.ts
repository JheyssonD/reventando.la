import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'shared/shared.module';
import { MaterialModule } from 'shared/material.module';

import { CryptoLayoutRoutes } from './crypto-layout.routing';
import { AccountPVUModule } from 'app/account-pvu/account-pvu.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,

    AccountPVUModule,

    RouterModule.forChild(CryptoLayoutRoutes)
  ]
})

export class CryptoLayoutModule {}
