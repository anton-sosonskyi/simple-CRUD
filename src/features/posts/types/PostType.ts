export type Post = {
  id: number;
  title: string;
  body: string;
};

export type PostForm = Omit<Post, 'id'>;
