const express = require("express");

const middlewares = require("./middleware");
const { publicRoutes, privateRoutes } = require("./routes");
const { baseRoute } = require("./utils/enums");

const { PUBLIC_PORT, PRIVATE_PORT } = process.env;

function initApp(config) {
  const { port, routes, type, basePath } = config;
  const app = express();
  app.use(middlewares);
  app.use(basePath, routes);
  app.listen(port, () =>
    console.log(`${type} server listening on port ${port}`)
  );
}

initApp({
  port: PUBLIC_PORT,
  routes: publicRoutes,
  type: "public",
  basePath: baseRoute.PUBLIC
});

initApp({
  port: PRIVATE_PORT,
  routes: privateRoutes,
  type: "private",
  basePath: baseRoute.PRIVATE
});
