import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'shared/shared.module';
import { MaterialModule } from 'shared/material.module';

import { ReviewLayoutRoutes } from './review-layout.routing';
import { ProfileModule } from 'app/profile/profile.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    ProfileModule,
    RouterModule.forChild(ReviewLayoutRoutes)
  ]
})

export class ReviewLayoutModule {}
