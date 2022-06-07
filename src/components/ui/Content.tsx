type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props): React.ReactElement => {
  return <div className="container">{children}</div>;
};

export default Content;
