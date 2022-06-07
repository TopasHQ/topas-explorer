import Backdrop from 'components/ui/Backdrop';
import Button from 'components/ui/Button';
import Content from 'components/ui/Content';
import Loading from 'components/ui/Loading';
import Metadata from 'components/ui/Metadata';
import NotFound from 'components/ui/NotFound';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTransactions } from 'services/api';
import { Transaction } from 'types';

import TransactionAsset from './TransactionAsset';
import TransactionData from './TransactionData';
import TransactionHeader from './TransactionHeader';

const TransactionPage = (): React.ReactElement => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const updateTransaction = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTransactions({ transactionId: id || '' });

        if (data.length) {
          setTransaction(data[0]);
        }
      } catch (err) {
        console.error(err);
      }

      setIsLoading(false);
    };

    updateTransaction();
  }, [id]);

  return (
    <Content>
      <Metadata title={`Transaction ${id}`} description={`Transaction details for ${id}`} />

      {isLoading && <Loading />}

      {!transaction && !isLoading && <NotFound />}

      {transaction && !isLoading && (
        <>
          <Backdrop>
            <TransactionHeader transaction={transaction} />
            <hr className="my-12" />
            <TransactionData transaction={transaction} />
            <hr className="my-12" />
            <h3 className="text-center">Asset Data</h3>
            <TransactionAsset transaction={transaction} />
          </Backdrop>

          <div className="flex justify-center mt-8">
            <Button color="primary" onClick={() => navigate('/transactions')}>
              Back to Overview
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};

export default TransactionPage;
