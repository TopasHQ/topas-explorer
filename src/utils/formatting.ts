import config from 'config';

export const displayNumber = (input: number) => input.toLocaleString();

export const truncate = (input: string) => `${input.slice(0, 8)}...${input.slice(-8)}`;

export const beddowsToLsk = (input: bigint | string) => {
  const value = typeof input !== 'bigint' ? BigInt(input) : input;
  const amount = (Number(value) / 100000000).toLocaleString();
  return `${amount} ${config.TICKER}`;
};
