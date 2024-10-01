import Post from '../models/Post';

class PostService {
    static async findAll() {
        return Post.findAll();
    }

    static async findById(id: string) {
        return Post.findByPk(id);
    }

    static async create(postData: Partial<Post>) {
        return Post.create(postData);
    }

    static async update(id: number, postData: Partial<Post>) {
        const post = await this.findById(id);
        if (post) {
            return post.update(postData);
        }
        return null;
    }

    static async delete(id: number) {
        const post = await this.findById(id);
        if (post) {
            await post.destroy();
            return true;
        }
        return false;
    }
}

export default PostService;
