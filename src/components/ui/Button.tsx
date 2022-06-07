import Spinner from './Spinner';

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { isLoading?: boolean };

const Button = ({ disabled, color, children, isLoading, ...props }: Props): React.ReactElement => {
  const getButtonStyle = () => {
    if (disabled) {
      return 'border-2 border-gray-600 bg-transparent text-gray-600';
    }

    switch (color) {
      case 'primary':
        return 'border-2 border-primary-400 bg-primary-400 hover:bg-primary-200 text-dark';
      case 'primary-bordered':
        return 'border-2 border-primary-400 bg-transparent text-primary-400 hover:border-primary-200 hover:text-primary-200';
      case 'secondary':
        return 'border-2 border-secondary-400 bg-secondary-400 hover:bg-secondary-200 text-dark';
      case 'secondary-bordered':
        return 'border-2 border-secondary-400 bg-transparent text-secondary-400 hover:border-secondary-200 hover:text-secondary-200';
      case 'danger':
        return 'bg-red-400 hover:bg-red-200 text-dark';
      case 'danger-bordered':
        return 'border-2 border-red-400 bg-transparent text-red-400 hover:border-red-200 hover:text-red-200';
      default:
        return 'border-2 border-primary-400 bg-primary-400 hover:bg-primary-200 text-dark';
    }
  };

  return (
    <button {...props} className={`font-bold py-1 px-3 rounded-xl transition-colors shadow-sm ${getButtonStyle()}`}>
      {isLoading && <Spinner />}
      {!isLoading && children}
    </button>
  );
};

export default Button;
