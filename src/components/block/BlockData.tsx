import KeyValue from 'components/ui/KeyValue';
import { Block } from 'types';
import { beddowsToLsk } from 'utils/formatting';

type Props = {
  block: Block;
};

const BlockData = ({ block }: Props): React.ReactElement => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <KeyValue title="Height" value={block.height} />
          <KeyValue title="Transactions" value={block.numberOfTransactions} />
          <KeyValue title="Is Final" value={block.isFinal} />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <KeyValue title="Total Burnt" value={beddowsToLsk(BigInt(block.totalBurnt))} />
          <KeyValue title="Total Fee" value={beddowsToLsk(BigInt(block.totalFee))} />
          <KeyValue title="Total Forged" value={beddowsToLsk(BigInt(block.totalForged))} />
        </div>
      </div>
    </div>
  );
};

export default BlockData;
