type Props = {
  children: any;
};

const Backdrop = ({ children }: Props): React.ReactElement => {
  return <div className="bg-darker rounded-xl p-8 w-full shadow-sm border-2 border-primary-800">{children}</div>;
};

export default Backdrop;
