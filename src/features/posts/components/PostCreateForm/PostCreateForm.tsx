import { useCallback } from 'react';
import { Button, FormControl } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PostsApi } from '../../api/posts-api';
import { useAppDispatch } from '../../../../app/store/hooks';
import { Post, PostForm } from '../../types/PostType';
import * as postsActions from '../../postsSlice';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../../components/FormTextInput';
import { useYupValidationResolver } from '../../../../hooks/useYupValidationResolver';
import { validationSchema } from './PostCreateForm.schema';


export const PostCreateForm = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    control,
  } = useForm<PostForm>({ resolver });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(async (data: Omit<Post, "id">) => {
    const id = +uuidv4().replaceAll(/\D+/g, '').slice(0, 4);
    const newPost: Post = {
      ...data,
      id,
    };

    dispatch(postsActions.add(newPost));
    toast.success("Post created!");
    await PostsApi.createPost(data);
    navigate('/');
  }, []);

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
