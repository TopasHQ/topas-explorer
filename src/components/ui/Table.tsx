import Empty from './Empty';
import Spinner from './Spinner';

type Props = {
  cols: { key: string; name?: string; renderItem?: (item: any) => any }[];
  data: Record<string, any>[];
  isLoading?: boolean;
};

const Th = ({ children }: { children: React.ReactNode }) => (
  <th scope="col" className="px-6 py-3">
    {children}
  </th>
);

const Td = ({ children }: { children: React.ReactNode }) => <td className="px-6 py-4">{children}</td>;

const Table = ({ cols, data, isLoading }: Props): React.ReactElement => {
  const renderLoader = () => {
    if (isLoading) {
      return (
        <div className="absolute left-1/2 top-1/2">
          <div className="text-4xl text-gray-200">
            <Spinner />
          </div>
        </div>
      );
    }
  };

  const renderTableBody = () => {
    if (data.length === 0) {
      return (
        <tr className="h-64">
          <td colSpan={cols.length + 1}>{!isLoading && <Empty />}</td>
        </tr>
      );
    }

    return data.map((item, i) => (
      <tr
        key={`item-${i}-tr`}
        className={`border-b dark:bg-gray-800 dark:border-gray-700 ${isLoading ? 'opacity-20' : 'opacity-100'}`}
      >
        {cols.map(({ key, renderItem }, i) => (
          <Td key={`${item[key]}-${i}-td`}>{renderItem ? renderItem(item[key]) : item[key]}</Td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto relative border-2 border-primary-800 rounded-xl my-8">
      {renderLoader()}
      <table className="text-sm text-left shadow-sm m-0">
        <thead className="text-xs text-gray-300 uppercase bg-darker  ">
          <tr>
            {cols.map(col => (
              <Th key={col.key}>{col.name || col.key}</Th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-darkest">{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
