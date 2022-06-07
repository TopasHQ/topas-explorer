import { useState } from 'react';

import Button from './Button';
import Input from './Input';

type Props = {
  onSubmit: (input: string) => void;
};

const Search = ({ onSubmit }: Props): React.ReactElement => {
  const [input, setInput] = useState('');

  return (
    <form className="flex gap-4" onSubmit={() => onSubmit(input)}>
      <Input type="search" onChange={e => setInput(e.target.value)} value={input} />
      <Button type="submit" color="secondary">
        Search
      </Button>
    </form>
  );
};

export default Search;
