import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  className = '',
  labelClassName = '',
  wrapperClassName = '',
  ...rest
}) => {
  return (
    <div className={clsx('mb-4', wrapperClassName)}>
      {label && (
        <label htmlFor={name} className={clsx('block mb-1 font-medium', labelClassName)}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={clsx('w-1/2 border px-3 py-2 rounded', className)}
        {...rest}
      />
    </div>
  );
};

export default Input;
