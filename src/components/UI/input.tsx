import React from 'react';
import type { Control, FieldValues } from 'react-hook-form';

export type InputProps = {
  autoComplete?: 'new-password' | 'off';
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  name: string;
  label?: string;
  type: string;
  require?: boolean;
  control?: Control<FieldValues, any>;
  defaultValue?: any;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    autoComplete = 'off',
    disabled,
    name,
    onBlur,
    onChange,
    type = 'text',
    require,
    error,
    defaultValue,
    label
  },
  ref
) {
  return (
    <>
      <input
        type={type}
        id={name}
        autoComplete={autoComplete}
        className={` ${
          error ? 'border-red-500' : 'border-gray-80'
        } border-t-none border-r-none w-full border-l-none 
      items-start rounded-none  pt-[20px] font-Montserrat text-[14px] font-normal leading-[19.6px] outline-none`}
        placeholder=""
        ref={ref}
        name={name}
        disabled={disabled}
        required={require}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label
        className="ease-in-outbg-white w-auto-[82px] pointer-events-none
                absolute left-0 top-[20px] h-[20px] font-semibold text-left uppercase text-[#4f7a92]
                 not-italic leading-[16.8px] text-gray-80 transition duration-200 bg-white pl-3 pr-3"
      >
        {label}
      </label>
      <span
        className="absolute bottom-[-24px] right-0 font-roboto text-[12px] font-normal
                not-italic leading-[16.8px] text-[#E74C3C]"
      >
        {error}
      </span>
    </>
  );
});
