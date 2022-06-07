import Spinner from './Spinner';

const Loading = (): React.ReactElement => {
  return (
    <div className="text-2xl my-8 flex justify-center items-center h-full text-gray-300">
      <Spinner />
    </div>
  );
};

export default Loading;
