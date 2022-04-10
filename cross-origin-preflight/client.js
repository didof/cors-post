import path from "path";
import fastify from "fastify";
import fastifyStatic from "fastify-static";

const server = fastify();

server.register(fastifyStatic, {
  root: path.join(process.cwd(), "public"),
});

server.get("/", (_, reply) => {
  reply.sendFile("index.html");
});

server.listen(8000, () =>
  console.info(`Client exposed on http://localhost:8000`)
);
