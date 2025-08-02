import Fastify from 'fastify';
import { connectDB } from './config/db';
import userRoutesV1 from './routes/v1/user.routes';
import swaggerPlugin from './plugins/swagger';
import cors from '@fastify/cors';

const server = Fastify({ logger: true });

async function main() {
  await connectDB();

  await server.register(cors, {
    origin: '*',
  });

  await server.register(swaggerPlugin);

  server.get('/', () => {
    return 'Welcome to ClickNDrive API';
  });

  await server.register(userRoutesV1, { prefix: '/api/v1' });

  try {
    await server.listen({ port: 3000 });
    console.log(`Server running at http://localhost:3000`);
    console.log(`Swagger docs available at http://localhost:3000/docs`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

main();
