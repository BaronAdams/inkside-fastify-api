import { FastifyReply, FastifyRequest } from 'fastify';
import PostService from '../services/post.service';

class PostController {
    static postService = PostService

    static async getPosts(req: FastifyRequest, reply: FastifyReply) {
        const posts = await this.postService.create();
        reply.send(posts);
    }

    static async getPostById(req: FastifyRequest, reply: FastifyReply) {
        const post = await this.postService.findById(String(req.params?.id));
        if (post) {
            reply.send(post);
        } else {
            reply.status(404).send({ message: 'Post not found' });
        }
    }

    static async createPost(req: FastifyRequest, reply: FastifyReply) {
        const { username, email, password } = req.body
        const post = await this.postService.create(req.body);
        reply.status(201).send(post);
    }

    static async updatePost(req: FastifyRequest, reply: FastifyReply) {
        const post = await this.postService.update(Number(req.params.id), req.body);
        if (post) {
            reply.send(post);
        } else {
            reply.status(404).send({ message: 'Post not found' });
        }
    }

    static async deletePost(req: FastifyRequest, reply: FastifyReply) {
        const success = await PostService.deletePost(Number(req.params.id));
        if (success) {
            reply.status(204).send();
        } else {
            reply.status(404).send({ message: 'Post not found' });
        }
    }
}

export default PostController;
