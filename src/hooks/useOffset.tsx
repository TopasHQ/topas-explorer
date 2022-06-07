import { useState } from 'react';

const useOffset = (startingOffset = 0) => {
  const [offset, setOffset] = useState(startingOffset);

  const increaseOffset = () => {
    setOffset(offset + 100);
  };

  const decreaseOffset = () => {
    if (offset === 0) {
      return;
    }

    setOffset(offset - 100);
  };

  return { offset, increaseOffset, decreaseOffset };
};

export default useOffset;
