type InputProps = {
  type: string;
  placeholder?: string;
};

export const FormInput = ({ type, placeholder }: InputProps) => {
  return <input type={type} placeholder={placeholder} />;
};
