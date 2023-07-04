import fastify, { FastifyInstance } from "fastify";
import { route } from "../controllers/route";

export function createTestServer(): FastifyInstance{
    const app = fastify();
    route(app);
    return app;
}