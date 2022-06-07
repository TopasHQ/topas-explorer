import TopasIcon from 'components/ui/TopasIcon';
import config from 'config';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Transactions', href: '/transactions' },
  { name: 'Blocks', href: '/blocks' },
  { name: 'Accounts', href: '/accounts' },
];

const Header = (): React.ReactElement => {
  return (
    <header className="bg-darkest text-white flex justify-center py-8 px-2 md:px-4 lg:px-6 xl:px-8">
      <div className="flex justify-between container">
        <Link className="text-xl font-extrabold uppercase" to="/">
          <TopasIcon /> {config.PROJECT_TITLE}
          {/* <Icon type="faDog" className="mr-2" /> {config.PROJECT_TITLE} */}
        </Link>
        <div className="flex gap-8 font-bold text-primary-400">
          {navigation.map(nav => (
            <Link key={nav.name} to={nav.href}>
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
