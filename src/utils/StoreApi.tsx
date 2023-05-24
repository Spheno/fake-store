import { FAKE_STORE_URL, ERR } from './constants'
import { IProduct } from '../types/types';

function handleResponse(res: Response): Promise<IProduct[]> {
  if (!res.ok) {
    return Promise.reject(ERR)
  }
  return res.json();
}

export const getProducts = (): Promise<IProduct[]> => {
  return fetch(`${FAKE_STORE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(handleResponse)
}