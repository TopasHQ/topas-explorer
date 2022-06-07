import { Account, ApiResponse, Block, Params, Transaction } from 'types';

import { buildUrl, getAxios } from './axios';

const defaultParams = {
  //
  // sort: 'timestamp:desc',
  limit: 10,
};

export const fetchBlocks = async (params?: Params): Promise<Block[]> => {
  const query = { ...defaultParams, ...params };
  const url = buildUrl('blocks', query);

  return getAxios()
    .get<ApiResponse<Block>>(url)
    .then(res => res.data.data);
};

export const fetchTransactions = async (params?: Params): Promise<Transaction[]> => {
  const query = { ...defaultParams, ...params };
  const url = buildUrl('transactions', query);

  return getAxios()
    .get<ApiResponse<Transaction>>(url)
    .then(res => res.data.data);
};

export const fetchAccounts = async (params?: Params): Promise<Account[]> => {
  const query = { ...defaultParams, ...params };
  const url = buildUrl('accounts', query);

  return getAxios()
    .get<ApiResponse<Account>>(url)
    .then(res => res.data.data);
};
