import { useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import * as postsActions from '../postsSlice';

export const HomePage = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(postsActions.loadPosts());
    }
  }, []);

  return (
    <Box sx={{ mx: 4, display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ m: 2 }} variant="h4">
        Posts
      </Typography>

      {posts.length > 0 && (
        <List>
          {posts.map((post) => (
            <ListItem
              key={post.id}
              button
              component={Link}
              to={`/details/${post.id}`}
            >
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
