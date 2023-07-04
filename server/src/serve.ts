import fastify from "fastify";

import fastifyCors  from "@fastify/cors";
import { route } from "./controllers/route";


const app = fastify({
  logger: false
});

app.register(fastifyCors, {
    origin: true,
})
route(app);

app.listen({
    host:"0.0.0.0",
    port:3333
}).then(() => {
    console.log("Server is running on port 3333");
});
