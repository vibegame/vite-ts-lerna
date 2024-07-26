import groupBy from "lodash-es/groupBy";

type Route = {
  path: string;
};

export class Router {
  routes: Route[];

  constructor() {
    this.routes = [
      {
        path: "/home"
      },
      {
        path: "/about"
      },
      {
        path: "/home"
      },
      {
        path: "/about"
      },
      {
        path: "/home"
      },
      {
        path: "/about"
      }
    ];
    const groupedByPath = groupBy(this.routes, "path");

    console.log(groupedByPath);
  }

  addRoute(route: Route) {
    this.routes.push(route);
  }

  getRoutes() {
    return this.routes;
  }
}
