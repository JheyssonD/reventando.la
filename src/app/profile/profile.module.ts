import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'shared/material.module';
import { SharedModule } from 'shared/shared.module';

import { ProfileRoutes } from './profile.routing';
import { ProfileComponent } from './profile.component';
import { FormProfileCreateComponent } from './form-profile-create/form-profile-create.component';

@NgModule({
	imports: [
		SharedModule,
		MaterialModule,
		RouterModule.forChild(ProfileRoutes)
	],
	declarations: [
		ProfileComponent,
		FormProfileCreateComponent
	]
})

export class ProfileModule { }
