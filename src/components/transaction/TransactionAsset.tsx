import { Transaction } from 'types';

type Props = {
  transaction: Transaction;
};

const TransactionAsset = ({ transaction }: Props) => {
  return (
    <div className="flex justify-center">
      <pre className="px-16 py-8">
        <code>{JSON.stringify(transaction.asset, null, 4)}</code>
      </pre>
    </div>
  );
};

export default TransactionAsset;
