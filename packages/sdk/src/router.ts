import { log } from "@core/utils/log";

type Route = {
  path: string;
};

export class Router {
  routes: Route[];

  constructor() {
    this.routes = [];
    log("Router sss");
  }

  addRoute(route: Route) {
    this.routes.push(route);
  }

  getRoutes() {
    return this.routes;
  }
}
