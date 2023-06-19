import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup.string().trim().required("Required"),
  body: yup.string().trim().required("Required")
});
