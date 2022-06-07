import Button from 'components/ui/Button';
import Content from 'components/ui/Content';
import Metadata from 'components/ui/Metadata';
import Search from 'components/ui/Search';
import Table from 'components/ui/Table';
import useOffset from 'hooks/useOffset';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAccounts } from 'services/api';
import { Account } from 'types';
import { beddowsToLsk } from 'utils/formatting';

const cols = [
  {
    key: 'summary',
    name: 'Address',
    renderItem: (item: any) => (
      <Link className="truncate" to={`/account/${item.address}`}>
        {item.address}
      </Link>
    ),
  },
  { key: 'dpos', name: 'Username', renderItem: (item: any) => item.delegate.username },
  { key: 'sequence', name: 'Nonce', renderItem: (item: any) => item.nonce },
  { key: 'token', name: 'Balance', renderItem: (item: any) => beddowsToLsk(item.balance) },
];

const Accounts = (): React.ReactElement => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { offset, increaseOffset, decreaseOffset } = useOffset();

  const navigate = useNavigate();

  useEffect(() => {
    const updateAccounts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAccounts({ offset });
        setAccounts(data);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };

    updateAccounts();
  }, [offset]);

  const handleSearch = (input: string) => {
    navigate(`/account/${input}`);
  };

  return (
    <Content>
      <Metadata title="Accounts" description={`Account overview.`} />
      <Search onSubmit={handleSearch} />
      <Table cols={cols} data={accounts} isLoading={isLoading} />
      <div className="flex justify-center gap-4">
        <Button onClick={decreaseOffset} disabled={offset === 0}>
          Previous
        </Button>
        <Button onClick={increaseOffset} disabled={accounts.length === 0}>
          Next
        </Button>
      </div>
    </Content>
  );
};

export default Accounts;
