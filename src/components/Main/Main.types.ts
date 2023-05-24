import { IProduct } from '../../types/types';

export interface MainProps {
  products: IProduct[];
  userCart: IProduct[];
  onButtonClick: (card: IProduct) => void;
  onQuantityChange: (data: { value: number; id: number }) => void;
}