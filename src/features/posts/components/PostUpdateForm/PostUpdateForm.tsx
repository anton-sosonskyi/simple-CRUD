import { Button, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../types/PostType';
import { useAppDispatch } from '../../../../app/store/hooks';
import { useForm } from 'react-hook-form';
import * as postsActions from '../../postsSlice';
import { FormTextInput } from '../../../../components/FormTextInput';

type Props = {
  post: Post;
};

export const PostUpdateForm: React.FC<Props> = ({
  post: { id, title, body },
}) => {
  const {
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      title,
      body,
    },
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Partial<Post>) => {
    dispatch(postsActions.updatePost({ id, ...data }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl sx={{ gap: '10px' }}>
        <FormTextInput
          control={control}
          name={'title'}
          label={'Title'}
        />
        <FormTextInput
          control={control}
          name={'body'}
          label={'Description'}
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
      </FormControl>
    </form>
  );
};
