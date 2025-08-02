import { FastifyInstance } from 'fastify';
import {
  getUsersHandler,
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
  deactivateUserHandler
} from '../../controllers/user.controller';

async function userRoutesV1(fastify: FastifyInstance) {
  fastify.get('/users', {
    handler: getUsersHandler,
    schema: {
      description: 'Get all users',
      tags: ['Users'],
      response: {
        200: {
          type: 'array',
          items: { $ref: 'User#' }
        }
      }
    }
  });

  fastify.get('/users/:id', {
    handler: getUserHandler,
    schema: {
      description: 'Get user by ID',
      tags: ['Users'],
      params: {
        type: 'object',
        properties: { id: { type: 'string', format: 'uuid' } },
        required: ['id']
      },
      response: {
        200: { $ref: 'User#' },
        404: {
          type: 'object',
          properties: { message: { type: 'string' } }
        }
      }
    }
  });

  fastify.post('/users', {
    handler: createUserHandler,
    schema: {
      description: 'Create new user',
      tags: ['Users'],
      body: {
        type: 'object',
        required: ['username', 'password', 'email', 'phoneNumber'],
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
          email: { type: 'string', format: 'email' },
          phoneNumber: { type: 'string', pattern: '^\\+?[0-9]{9,15}$' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          birthDate: { type: 'string', format: 'date-time' }
        }
      },
      response: {
        201: { $ref: 'User#' },
        400: {
          type: 'object',
          properties: { message: { type: 'string' } }
        }
      }
    }
  });

  fastify.put('/users/:id', {
    handler: updateUserHandler,
    schema: {
      description: 'Update user by ID',
      tags: ['Users'],
      params: {
        type: 'object',
        properties: { id: { type: 'string' } },
        required: ['id']
      },
      body: {
        type: 'object',
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
          email: { type: 'string', format: 'email' },
          phoneNumber: { type: 'string', pattern: '^\\+?[0-9]{9,15}$' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          birthDate: { type: 'string', format: 'date-time' },
          profilePhoto: { type: 'string' }
        }
      },
      response: {
        200: { $ref: 'User#' },
        404: {
          type: 'object',
          properties: { message: { type: 'string' } }
        }
      }
    }
  });

  fastify.delete('/users/:id', {
    handler: deleteUserHandler,
    schema: {
      description: 'Delete user by ID',
      tags: ['Users'],
      params: {
        type: 'object',
        properties: { id: { type: 'string' } },
        required: ['id']
      },
      response: {
        204: { type: 'null' },
        404: {
          type: 'object',
          properties: { message: { type: 'string' } }
        }
      }
    }
  });

  fastify.patch('/users/:id/deactivate', {
    handler: deactivateUserHandler,
    schema: {
      description: 'Deactivate user account',
      tags: ['Users'],
      params: {
        type: 'object',
        properties: { id: { type: 'string' } },
        required: ['id']
      },
      response: {
        200: { $ref: 'User#' },
        404: {
          type: 'object',
          properties: { message: { type: 'string' } }
        }
      }
    }
  });
}

export default userRoutesV1;
