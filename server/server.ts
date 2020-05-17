import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import { APP_HOST, APP_PORT } from "../config/config.ts";
import userRoutes from "../routes/users.ts";
(async () => {
  const app = new expressive.App();
  app.use(expressive.simpleLog());
  app.use(expressive.static_("./public"));
  app.use(expressive.bodyParser.json());
  app.get("/api/todos", async (req, res) => {
  await res.json([{ name: "Buy some milk" }]);
  });
  
  console.log('app :>> ', app);

  const server = await app.listen(APP_PORT,APP_HOST);
  console.log("app listening on port " + server.port);
})();