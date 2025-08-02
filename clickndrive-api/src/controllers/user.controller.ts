import { FastifyRequest, FastifyReply } from 'fastify';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deactivateUser
} from '../services/user.service';

export const getUsersHandler = async (req: FastifyRequest, reply: FastifyReply) => {
  const users = await getAllUsers();
  return reply.send(users);
};

export const getUserHandler = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const user = await getUserById(req.params.id);
  if (!user) return reply.code(404).send({ message: 'User not found' });
  return reply.send(user);
};

export const createUserHandler = async (
  req: FastifyRequest<{ Body: any }>,
  reply: FastifyReply
) => {
  try {
    const user = await createUser(req.body);
    return reply.code(201).send(user);
  } catch (err: any) {
    return reply.code(400).send({ message: err.message });
  }
};

export const updateUserHandler = async (
  req: FastifyRequest<{ Params: { id: string }; Body: any }>,
  reply: FastifyReply
) => {
  const user = await updateUser(req.params.id, req.body);
  if (!user) return reply.code(404).send({ message: 'User not found' });
  return reply.send(user);
};

export const deleteUserHandler = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const user = await deleteUser(req.params.id);
  if (!user) return reply.code(404).send({ message: 'User not found' });
  return reply.code(204).send();
};

export const deactivateUserHandler = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const user = await deactivateUser(req.params.id);
  if (!user) return reply.code(404).send({ message: 'User not found' });
  return reply.send(user);
};
