import { Routes } from '@angular/router';

import { ProfileComponent } from 'app/profile/profile.component';

export const ReviewLayoutRoutes: Routes = [
    { path: 'perfil', component: ProfileComponent },
    { path: 'perfil/crear', component: ProfileComponent },
    { path: 'perfil/info', component: ProfileComponent },
];
