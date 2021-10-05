import { Routes } from '@angular/router';

import { AccountPVUComponent } from './account-pvu.component';

export const AccountPVURoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'AccountPVU',
            component: AccountPVUComponent
        }]
    },
];
