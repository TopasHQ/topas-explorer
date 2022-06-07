import Button from 'components/ui/Button';
import Content from 'components/ui/Content';
import Metadata from 'components/ui/Metadata';
import Search from 'components/ui/Search';
import Table from 'components/ui/Table';
import useOffset from 'hooks/useOffset';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchTransactions } from 'services/api';
import { Transaction } from 'types';
import { dateFromTimestamp } from 'utils/dates';
import { beddowsToLsk, truncate } from 'utils/formatting';

const cols = [
  {
    key: 'id',
    name: 'Transaction ID',
    renderItem: (item: any) => <Link to={`/transaction/${item}`}>{truncate(item)}</Link>,
  },
  { key: 'block', name: 'Date', renderItem: (item: any) => dateFromTimestamp(item.timestamp) },
  { key: 'sender', renderItem: (item: any) => <Link to={`/account/${item.address}`}>{truncate(item.address)}</Link> },
  { key: 'moduleAssetName', name: 'Type' },
  { key: 'fee', renderItem: (item: bigint) => beddowsToLsk(item) },
];

const Transactions = (): React.ReactElement => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { offset, increaseOffset, decreaseOffset } = useOffset();

  const navigate = useNavigate();

  useEffect(() => {
    const updateTransactions = async () => {
      setIsLoading(true);
      const data = await fetchTransactions({ offset });
      setTransactions(data);
      setIsLoading(false);
    };

    updateTransactions();
  }, [offset]);

  const handleSearch = (input: string) => {
    navigate(`/block/${input}`);
  };

  return (
    <Content>
      <Metadata title="Transactions" description={`Transaction overview.`} />
      <Search onSubmit={handleSearch} />
      <Table cols={cols} data={transactions} isLoading={isLoading} />
      <div className="flex justify-center gap-4">
        <Button onClick={decreaseOffset} disabled={offset === 0}>
          Previous
        </Button>
        <Button onClick={increaseOffset} disabled={transactions.length === 0}>
          Next
        </Button>
      </div>
    </Content>
  );
};

export default Transactions;
