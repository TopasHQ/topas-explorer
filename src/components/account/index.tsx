import Backdrop from 'components/ui/Backdrop';
import Button from 'components/ui/Button';
import Content from 'components/ui/Content';
import Loading from 'components/ui/Loading';
import Metadata from 'components/ui/Metadata';
import NotFound from 'components/ui/NotFound';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAccounts } from 'services/api';
import { Account } from 'types';
import { isValidLskAddress } from 'utils/validation';

import AccountData from './AccountData';
import AccountHeader from './AccountHeader';

const AccountPage = (): React.ReactElement => {
  const [account, setAccount] = useState<Account | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const updateAccount = async () => {
      try {
        setIsLoading(true);

        if (!id) {
          setIsLoading(false);
          return;
        }

        let data: Account[];

        if (isValidLskAddress(id)) {
          data = await fetchAccounts({ address: id });
        } else {
          data = await fetchAccounts({ username: id });
        }

        if (data.length) {
          setAccount(data[0]);
        }
      } catch (err) {
        console.error(err);
      }

      setIsLoading(false);
    };

    updateAccount();
  }, [id]);

  return (
    <Content>
      <Metadata title={`Account ${id}`} description={`Account details for ${id}`} />

      {isLoading && <Loading />}

      {!account && !isLoading && <NotFound />}

      {account && !isLoading && (
        <>
          <Backdrop>
            <AccountHeader account={account} />
            <hr className="my-12" />
            <AccountData account={account} />
          </Backdrop>

          <div className="flex justify-center mt-8">
            <Button color="primary" onClick={() => navigate('/accounts')}>
              Back to Overview
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};

export default AccountPage;
