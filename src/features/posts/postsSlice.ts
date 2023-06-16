import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsApi } from './api/posts-api';
import { Post } from './types/PostType';

type PostsState = {
  posts: Post[];
};

export const loadPosts = createAsyncThunk('posts/fetch', async () => {
  const userPosts = await PostsApi.getPosts();

  return userPosts;
});

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    add: (state: PostsState, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(
        (post: Post) => post.id !== action.payload
      );
    },
    updatePost: (state, action: PayloadAction<Partial<Post>>) => {
      state.posts = state.posts.map((post: Post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            ...action.payload,
          };
        }

        return post;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
      }
    );
  },
});

export default postsSlice.reducer;
export const { add, deletePost, updatePost } = postsSlice.actions;
