import { Link } from 'react-router-dom';
import { Transaction } from 'types';
import { dateFromTimestamp } from 'utils/dates';

type Props = {
  transaction: Transaction;
};

const TransactionHeader = ({ transaction }: Props): React.ReactElement => {
  return (
    <div className="text-center">
      <h2 className="truncate text-secondary-400">{transaction.id}</h2>
      <p>
        Sent by{' '}
        <Link to={`/account/${transaction.sender.address}`} className="font-bold">
          {transaction.sender.username || transaction.sender.address}
        </Link>{' '}
        on {dateFromTimestamp(transaction.block.timestamp)}
      </p>
    </div>
  );
};

export default TransactionHeader;
