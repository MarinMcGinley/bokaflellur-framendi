'use server';

import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import Button from '../components/button';
import Input from '../components/input';
import ErrorMessage from '../components/errorMessage';
import { ClientForm } from './clientForm';
// import { logInAction } from '../actions/auth';

// const handleThisValidation = (values: FormikValues) => {
//   const errors: { email?: string; password?: string; serverError?: string } =
//     {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// };

const LoginPage = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-y-1'>
      <h1 className='mx-2'>Login</h1>
      <ClientForm />
      {/* <Formik
        initialValues={{ email: '', password: '', serverError: '' }}
        validate={handleThisValidation}
        onSubmit={logInAction}
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
      </Formik> */}
    </div>
  );
};

export default LoginPage;
