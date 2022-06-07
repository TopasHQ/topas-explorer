import Backdrop from 'components/ui/Backdrop';
import Button from 'components/ui/Button';
import Content from 'components/ui/Content';
import Metadata from 'components/ui/Metadata';
import { useNavigate } from 'react-router-dom';

const Home = (): React.ReactElement => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  return (
    <Content>
      <Metadata title="Home" />
      <Backdrop>
        <div className="text-center h-64 flex items-center justify-center">
          <div>
            <h1>Topas Explorer</h1>

            <div className="flex gap-4 justify-center">
              <Button color="secondary" onClick={() => goTo('/transactions')}>
                Transactions
              </Button>
              <Button color="secondary" onClick={() => goTo('/blocks')}>
                Blocks
              </Button>
              <Button color="secondary" onClick={() => goTo('/accounts')}>
                Accounts
              </Button>
            </div>
          </div>
        </div>
      </Backdrop>
    </Content>
  );
};

export default Home;
