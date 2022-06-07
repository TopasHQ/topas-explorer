import { useNavigate } from 'react-router-dom';

import Button from './Button';

const NotFound = (): React.ReactElement => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h1>404 - Not Found</h1>
        <p>Whoops! This page does not exist.</p>

        <Button onClick={goBack}>Go Back</Button>
      </div>
    </div>
  );
};

export default NotFound;
