import { IProduct } from '../../types/types';

export interface CartProps {
  userCart: IProduct[];
  onQuantityChange: (data: { value: number; id: number }) => void;
}