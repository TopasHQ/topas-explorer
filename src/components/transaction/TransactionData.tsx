import KeyValue from 'components/ui/KeyValue';
import { Transaction } from 'types';
import { beddowsToLsk } from 'utils/formatting';

type Props = {
  transaction: Transaction;
};

const TransactionData = ({ transaction }: Props): React.ReactElement => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <KeyValue title="Is Pending" value={transaction.isPending} />
          <KeyValue title="Height" value={transaction.height} />
          <KeyValue title="Fee" value={beddowsToLsk(BigInt(transaction.fee))} />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <KeyValue title="Module Asset Name" value={transaction.moduleAssetName} />
          <KeyValue title="Module Asset ID" value={transaction.moduleAssetId} />
          <KeyValue title="Nonce" value={transaction.nonce} />
        </div>
      </div>
    </div>
  );
};

export default TransactionData;
