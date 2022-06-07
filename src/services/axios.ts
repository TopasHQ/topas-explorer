import axios from 'axios';
import config from 'config';
import qs from 'qs';
import { Params } from 'types';

export const getAxios = () => {
  return axios;
};

export const buildUrl = (path: string, params?: Params) => {
  const baseUrl = config.API_ENDPOINT;

  if (!baseUrl) {
    throw Error('No API specified');
  }

  const queryString = qs.stringify(params);

  return `${baseUrl}/api/v2/${path}?${queryString}`;
};
