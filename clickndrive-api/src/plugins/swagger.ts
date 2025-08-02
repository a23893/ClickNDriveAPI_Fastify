import fp from 'fastify-plugin';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

export default fp(async (fastify) => {
  // Swagger JSON docs (OpenAPI mode)
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'ClickNDrive API',
        description: 'API to manage vehicles and users',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
  });

  // Swagger UI
  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
  });

  // Add shared schema
  fastify.addSchema({
    $id: 'User',
    type: 'object',
    properties: {
      _id: { type: 'string', format: 'uuid' },
      username: { type: 'string' },
      email: { type: 'string' },
      phoneNumber: { type: 'string', pattern: '^\\+?[0-9]{9,15}$' },
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      birthDate: { type: 'string', format: 'date-time' },
      isActive: { type: 'boolean' },
      lastAccess: { type: 'string', format: 'date-time' },
      profilePhoto: { type: 'string', nullable: true },
      registrationDate: { type: 'string', format: 'date-time' },
    },
  });
});
