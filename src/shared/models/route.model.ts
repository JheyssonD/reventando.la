import { IRouteInfo } from "shared/interfaces/route.interface";

export class Route implements IRouteInfo {
    public path: string;
    public title: string;
    public icon: string;
    public class: string;
    public group: number;

    constructor() { }

}
