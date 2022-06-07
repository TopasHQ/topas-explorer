import KeyValue from 'components/ui/KeyValue';
import { Account } from 'types';

type Props = {
  account: Account;
};

const AccountData = ({ account }: Props): React.ReactElement => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-6 ">
      <div className="flex justify-center lg:col-span-4">
        <div className="w-full">
          <KeyValue title="Address" value={account.summary.address} />
          <KeyValue title="Public Key" value={account.summary.publicKey} />
          <KeyValue title="Username" value={account.summary.username || 'n/a'} />
        </div>
      </div>

      <div className="flex justify-center lg:col-span-2">
        <div className="w-full">
          <KeyValue title="Is Multisig" value={account.summary.isMultisignature} />
          <KeyValue title="Is Delegate" value={account.summary.isDelegate} />
          <KeyValue title="Nonce" value={account.sequence.nonce} />
        </div>
      </div>
    </div>
  );
};

export default AccountData;
