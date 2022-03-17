import * as Yup from 'yup';

const text = Yup.string()
  .required('This field is required')
  .min(2, 'Must be at least 2 characters')
  .max(100, 'Field can be up to 100 characters long');

export const sendPackageSchema = Yup.object({
  packageName: text,
  temp_c: Yup.number()
    .required('This field is required')
    .min(-85, 'We work from \n -80℃ to 200℃')
    .max(200, 'We work from \n -80℃ to 200℃'),
  payment_account_id: Yup.string().required('This field is required'),
  description: Yup.string()
    .required('This field is required')
    .min(2, 'Must be at least 2 characters')
    .max(1000, 'Field can be up to 1000 characters long'),
});
