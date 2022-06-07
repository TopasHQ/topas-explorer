import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
};

const Metadata = ({ title, description = 'Topas City block explorer' }: Props): React.ReactElement => {
  const getTitle = () => {
    if (title) {
      return `${title} | Topas Explorer`;
    }

    return 'Topas Explorer';
  };

  return (
    <Helmet>
      <title>{getTitle()}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default Metadata;
