import Account from 'components/account';
import Accounts from 'components/accounts';
import Block from 'components/block';
import Blocks from 'components/blocks';
import Home from 'components/home';
import Transaction from 'components/transaction';
import Transactions from 'components/transactions';
import NotFound from 'components/ui/NotFound';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

const Routes = (): React.ReactElement => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/blocks" element={<Blocks />} />
      <Route path="/block/:id" element={<Block />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transaction/:id" element={<Transaction />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </BrowserRoutes>
  );
};

export default Routes;
