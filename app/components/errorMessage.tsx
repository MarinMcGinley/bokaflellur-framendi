import { ErrorMessage as FormikErrorMessage } from 'formik';

type ErrorMessageProps = {
  name: string;
};

const ErrorMessage = ({ name }: ErrorMessageProps) => {
  return <FormikErrorMessage name={name} component='div' className='mx-2' />;
};

export default ErrorMessage;
