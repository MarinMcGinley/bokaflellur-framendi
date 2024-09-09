'use client';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import Input from '../components/input';
import ErrorMessage from '../components/errorMessage';
import Button from '../components/button';

import { logInAction } from '../actions/auth';

const handleThisValidation = (values: FormikValues) => {
  const errors: { email?: string; password?: string; serverError?: string } =
    {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const logIn: FormikConfig<{
  email: string;
  password: string;
  serverError: string;
}>['onSubmit'] = async (values: FormikValues, { setErrors }) => {
  try {
    await logInAction({ email: values.email, password: values.password });
  } catch (error) {
    setErrors({
      serverError: 'Invalid email or password',
    });
  }
};
export const ClientForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', serverError: '' }}
      validate={handleThisValidation}
      onSubmit={logIn}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-y-1'>
          <Input type='email' name='email' />
          <ErrorMessage name='email' />

          <Input type='password' name='password' />
          <ErrorMessage name='password' />

          <Button disabled={isSubmitting}>Submit</Button>
          <ErrorMessage name='serverError' />
        </Form>
      )}
    </Formik>
  );
};
