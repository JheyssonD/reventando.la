import { Component, OnInit } from '@angular/core';
import { IRouteInfo } from 'shared/interfaces/route.interface';
import { SidebarService } from 'shared/services/sidebar.service';

declare const $: any;

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	menuItems: any[];

	constructor(private sidebarService: SidebarService) { }

	ngOnInit() {
		this.menuItems = this.sidebarService.routes;
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	};
}
