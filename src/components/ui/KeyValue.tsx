type Props = {
  title: string;
  value: string | number | boolean | bigint;
};

const KeyValue = ({ title, value }: Props): React.ReactElement => {
  const getValue = () => {
    if (typeof value !== 'string') {
      return String(value);
    }

    return value;
  };

  return (
    <div className="flex justify-between gap-8 ">
      <div className="whitespace-nowrap">{title}</div>
      <div className="font-bold truncate" title={getValue()}>
        {getValue()}
      </div>
    </div>
  );
};

export default KeyValue;
