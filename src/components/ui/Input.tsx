type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ ...props }: Props) => {
  return (
    <input
      required
      {...props}
      className={`w-full px-4 py-2 rounded-xl shadow-sm bg-darkest border-2 border-primary-800 focus:outline-0 ${props.className}`}
    />
  );
};

export default Input;
