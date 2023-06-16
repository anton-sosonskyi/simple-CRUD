import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../types/PostType';
import * as postsActions from '../postsSlice';
import { PostUpdateForm } from '../components/PostUpdateForm/PostUpdateForm';
import { useAppDispatch } from '../../../app/store/hooks';
import { PostsApi } from '../api/posts-api';

export const PostDetailsPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const dispatch = useAppDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!postId) {
        return;
      }

      const serverData = await PostsApi.getPost(+postId);
      setPost(serverData);
    })();
  }, []);

  const handlePostDelete = (id: number) => async () => {
    dispatch(postsActions.deletePost(id));
    await PostsApi.removePost(id);
    navigate('/');
  };

  return (
    <>
      {post && (
        <Box
          sx={{
            m: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PostUpdateForm post={post} />

          <Button color="error" onClick={handlePostDelete(+postId)}>
            Delete post
          </Button>
        </Box>
      )}
    </>
  );
};
