import icon from 'assets/img/icon_32x32.png';

type Props = React.ButtonHTMLAttributes<HTMLImageElement>;

const TopasIcon = ({ ...props }: Props): React.ReactElement => {
  return <img src={icon} alt="Topas City icon" className="inline mr-2 h-8 mb-1" {...props} />;
};

export default TopasIcon;
