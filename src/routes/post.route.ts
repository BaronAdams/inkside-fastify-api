import { FastifyInstance } from 'fastify';
import PostController from '../controllers/post.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

export default async function postRoutes(fastify: FastifyInstance) {
    fastify.get('/posts', PostController.getPosts);
    fastify.get('/posts/:id', PostController.getPostById);
    fastify.post('/posts', { preHandler: AuthMiddleware.authenticate }, PostController.createPost);
    fastify.put('/posts/:id', { preHandler: AuthMiddleware.authenticate }, PostController.updatePost);
    fastify.delete('/posts/:id', { preHandler: AuthMiddleware.authenticate }, PostController.deletePost);
}
