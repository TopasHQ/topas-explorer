import Button from 'components/ui/Button';
import Content from 'components/ui/Content';
import Metadata from 'components/ui/Metadata';
import Search from 'components/ui/Search';
import Table from 'components/ui/Table';
import useOffset from 'hooks/useOffset';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchBlocks } from 'services/api';
import { Block } from 'types';
import { dateFromTimestamp } from 'utils/dates';
import { beddowsToLsk, truncate } from 'utils/formatting';

const cols = [
  { key: 'id', name: 'Block ID', renderItem: (item: any) => <Link to={`/block/${item}`}>{truncate(item)}</Link> },
  { key: 'timestamp', name: 'Date', renderItem: (item: any) => dateFromTimestamp(item) },
  { key: 'numberOfTransactions', name: 'TX' },
  { key: 'height' },
  {
    key: 'generatorUsername',
    name: 'Validator',
    renderItem: (item: any) => <Link to={`/account/${item}`}>{item}</Link>,
  },
  { key: 'reward', renderItem: (item: bigint) => beddowsToLsk(item) },
];

const Blocks = (): React.ReactElement => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { offset, increaseOffset, decreaseOffset } = useOffset();

  const navigate = useNavigate();

  useEffect(() => {
    const updateBlocks = async () => {
      setIsLoading(true);
      const data = await fetchBlocks({ offset });
      setBlocks(data);
      setIsLoading(false);
    };

    updateBlocks();
  }, [offset]);

  const handleSearch = (input: string) => {
    navigate(`/block/${input}`);
  };

  return (
    <Content>
      <Metadata title="Blocks" description={`Block overview.`} />
      <Search onSubmit={handleSearch} />
      <Table cols={cols} data={blocks} isLoading={isLoading} />
      <div className="flex justify-center gap-4">
        <Button onClick={decreaseOffset} disabled={offset === 0}>
          Previous
        </Button>
        <Button onClick={increaseOffset} disabled={blocks.length === 0}>
          Next
        </Button>
      </div>
    </Content>
  );
};

export default Blocks;
