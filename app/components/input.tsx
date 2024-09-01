import { Field } from 'formik';
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

type Color = 'green' | 'red' | 'blue' | 'yellow' | 'gray' | 'black';

type InputProps = {
  type?: HTMLInputTypeAttribute;
  name: InputHTMLAttributes<HTMLInputElement>['name'];
  color?: Color;
};

const colorMap = (color: Color) =>
  ({
    green:
      'border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:bg-green-500',
    red: '',
    blue: 'bg-blue-600 text-white',
    yellow: 'bg-yellow-600 text-white',
    gray: 'bg-gray-600 text-white',
    black: 'border-black text-black-600',
  }[color]);

const Input = ({ type, name, color = 'black' }: InputProps) => {
  const colorClass = colorMap(color);
  return (
    <Field
      className={`${colorClass} focus-visible:outline-none bg-inherit border-2 border-solid rounded-sm py-1 px-2 mx-2 my-1 disabled:border-slate-200`}
      type={type}
      name={name}
    />
  );
};

export default Input;
