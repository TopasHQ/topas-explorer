import { Account } from 'types';
import { beddowsToLsk } from 'utils/formatting';

type Props = {
  account: Account;
};

const AccountHeader = ({ account }: Props): React.ReactElement => {
  return (
    <div className="text-center">
      <h2 className="truncate text-secondary-400">{account.summary.username || account.summary.address}</h2>
      <p>
        Balance: <span className="font-bold">{beddowsToLsk(account.token.balance)}</span>
      </p>
    </div>
  );
};

export default AccountHeader;
