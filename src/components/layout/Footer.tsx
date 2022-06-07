import TopasIcon from 'components/ui/TopasIcon';
import config from 'config';

import Icon from '../ui/Icon';

const Footer = (): React.ReactElement => {
  return (
    <footer className="h-48 flex justify-center items-center bg-darkest">
      <div className="container sm:flex-row md:flex justify-between px-8">
        <div className="text-2xl mb-8 md:mb-0 flex justify-between mx-8 md:order-last text-gray-400">
          <a
            href="https://discord.gg/FSEssqVFbc"
            target="_blank"
            rel="noreferrer"
            className="footer-link mr-8"
            aria-label="Discord"
          >
            <Icon type="faDiscord" />
          </a>

          <a
            href="https://github.com/TopasHQ"
            target="_blank"
            rel="noreferrer"
            className="footer-link mr-8"
            aria-label="GitHub"
          >
            <Icon type="faGithub" />
          </a>

          <a
            href="https://twitter.com/TopasHQ"
            target="_blank"
            rel="noreferrer"
            className="footer-link mr-8"
            aria-label="Twitter"
          >
            <Icon type="faTwitter" />
          </a>

          <a href="mailto:info@topas.city" target="_blank" rel="noreferrer" className="footer-link" aria-label="E-mail">
            <Icon type="faEnvelope" />
          </a>
        </div>

        <div className="text-gray-400 text-sm md:text-left flex items-center justify-center">
          {/* <Icon type="faDog" className="h-4 md:h-8 inline mr-4" /> */}
          <TopasIcon className="h-6 md:h-8 inline mr-3" />
          ©2022 {config.PROJECT_TITLE} team, all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
