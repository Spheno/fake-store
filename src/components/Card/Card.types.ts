import { IProduct } from '../../types/types';

export interface CardProps {
  product: IProduct;
  userCart: IProduct[];
  inCart?: boolean;
  onButtonClick: (card: IProduct) => void;
  onQuantityChange: (data: { value: number; id: number }) => void;
}