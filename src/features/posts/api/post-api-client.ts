import axios, { AxiosError } from 'axios';
import { throwErrorToast } from '../../../utils/throw-toast';

export const postsApiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

postsApiClient.interceptors.response.use(
  undefined,
  (err: AxiosError<{ message: string }>) => {
    const title = err.response?.data?.message ?? err.message;
    throwErrorToast({ title });
    throw err;
  }
);
