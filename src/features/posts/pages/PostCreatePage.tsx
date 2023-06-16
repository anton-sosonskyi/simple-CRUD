import { Box } from '@mui/material';
import { PostCreateForm } from '../components/PostCreateForm';

export const PostCreatePage = () => {
  return (
    <Box
      sx={{
        m: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <PostCreateForm />
    </Box>
  );
};
