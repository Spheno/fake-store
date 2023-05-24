import { IProduct } from '../../types/types';

export interface CounterProps {
  product: IProduct;
  onQuantityChange: (data: { value: number; id: number }) => void;
}