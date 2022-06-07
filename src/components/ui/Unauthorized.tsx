import { useNavigate } from 'react-router-dom';

import Button from './Button';

const Unauthorized = (): React.ReactElement => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h1>401 - Unauthorized</h1>
        <p>Whoops! You are not authenticated.</p>

        <Button onClick={goBack}>Go Back</Button>
      </div>
    </div>
  );
};

export default Unauthorized;
