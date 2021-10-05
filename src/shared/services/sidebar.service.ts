import { Injectable } from "@angular/core";
import { Route } from "shared/models/route.model";


@Injectable()
export class SidebarService {
    private _routes: Array<Route>;
    private _rolId: number = 1;


    constructor() {
        this._routes = ROUTES;
    }

    
    public get routes(): Array<Route> {
        return this._routes.filter(r => r.group == this.rolId);
    }

    public get rolId(): number {
        return this._rolId;
    }
    

}
export const ROUTES: Array<Route> = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', group: 0 },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '', group: 0 },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '', group: 0 },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '', group: 0 },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '', group: 0 },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '', group: 0 },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '', group: 0 },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro', group: 0 },
    { path: '/perfil', title: 'Perfil', icon: 'person', class: '', group: 1 },
    { path: '/perfil/crear', title: 'Crear Perfil', icon: 'person', class: '', group: 1 },
    { path: '/perfil/info', title: 'Informacion Perfil', icon: 'person', class: '', group: 1 },
];