type Color = 'green' | 'red' | 'blue' | 'yellow' | 'gray' | 'black';

type ButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
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

const Button = ({ children, disabled, color = 'black' }: ButtonProps) => {
  const colorClass = colorMap(color);
  return (
    <button
      className={`${colorClass} border-2 border-solid rounded-sm py-1 mx-2 my-1 disabled:border-slate-200`}
      type='submit'
      disabled={disabled}
      name='serverError'
    >
      {children}
    </button>
  );
};

export default Button;
