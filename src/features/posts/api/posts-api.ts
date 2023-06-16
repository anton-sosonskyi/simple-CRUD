import { Post } from '../types/PostType';
import { postsApiClient } from './post-api-client';

export class PostsApi {
  static getPosts(): Promise<Post[]> {
    return postsApiClient.get<Post[]>('/posts').then((resp) => resp.data);
  }

  static getPost(postId: number): Promise<Post> {
    return postsApiClient.get<Post>(`/posts/${postId}`).then((resp) => resp.data);
  }

  static createPost(post: Omit<Post, 'id'>) {
    return postsApiClient.post('/posts', post);
  }

  static removePost(postId: number) {
    return postsApiClient.delete(`/posts/${postId}`);
  }

  static updatePost(postId: number, data: Partial<Post>) {
    return postsApiClient.put(`/posts/${postId}`, data);
  }
}
