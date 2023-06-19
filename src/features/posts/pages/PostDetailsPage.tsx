import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  }, [postId]);

  const handlePostDelete = (id: number) => async () => {
    dispatch(postsActions.deletePost(id));
    await PostsApi.removePost(id);
    toast.success("Post deleted!");
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

          {postId && (
          <Button color="error" onClick={handlePostDelete(+postId)}>
            Delete post
          </Button>
          )}
        </Box>
      )}
    </>
  );
};
