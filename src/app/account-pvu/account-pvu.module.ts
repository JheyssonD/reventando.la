import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'shared/shared.module';
import { MaterialModule } from 'shared/material.module';

import { AccountPVURoutes } from './account-pvu.routing';
import { AccountPVUComponent } from './account-pvu.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule.forChild(AccountPVURoutes)
  ],
  declarations: [
    AccountPVUComponent
  ]
})

export class AccountPVUModule {}
