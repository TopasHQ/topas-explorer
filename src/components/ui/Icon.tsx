import { faDiscord, faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faArrowUp,
  faBook,
  faCircleInfo,
  faCircleNotch,
  faDog,
  faEnvelope,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  type: keyof typeof icons;
  className?: string;
};

const icons = {
  faEnvelope,
  faDiscord,
  faTwitter,
  faTelegram,
  faGithub,
  faBook,
  faArrowLeft,
  faArrowUp,
  faCircleNotch,
  faCircleInfo,
  faDog,
  faSpinner,
};

const Icon = ({ type, className }: Props): React.ReactElement => {
  return <FontAwesomeIcon icon={icons[type]} className={className} />;
};

export default Icon;
