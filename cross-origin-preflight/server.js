import fastify from "fastify";
import fastifyCors from "fastify-cors";

const server = fastify();

server.register(fastifyCors, {
  origin: "http://localhost:8000",
});

server.get("/me", (_, reply) => {
  reply.status(200).send({ nickname: "didof" });
});

server.listen(3000, () =>
  console.info(`Server listening on http://localhost:3000`)
);
