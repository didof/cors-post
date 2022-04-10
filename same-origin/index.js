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

server.get("/me", (_, reply) => {
  reply.status(200).send({ nickname: "didof" });
});

server.listen(3000, () =>
  console.info(`Server listening on http://localhost:3000`)
);
