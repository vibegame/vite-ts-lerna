type Route = {
  path: string;
};

export class Router {
  routes: Route[];

  constructor() {
    this.routes = [];
  }

  addRoute(route: Route) {
    this.routes.push(route);
  }

  getRoutes() {
    return this.routes;
  }
}
