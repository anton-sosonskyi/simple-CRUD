import { TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: keyof T;
  control: Control<T>;
  label: string;
};

export const FormTextInput= <T extends FieldValues>({
  name,
  control,
  label,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          required
          multiline
          error={fieldState.invalid}
          helperText={fieldState.invalid ? "Field can't be empty" : ''}
        />
      )}
    />
  );
};
