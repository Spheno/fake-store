import { FC } from 'react';
import styles from './Cart.module.scss';
import { CartProps } from './Cart.types';
import Counter from '../Counter/Counter';

export const Cart: FC<CartProps> = ({ userCart, onQuantityChange }) => {

  return (
    <>
      <div className={styles.cart}>
        {userCart.map((product) => (
          <div key={product.id} className={styles.productList}>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.title}</h3>
              <p className={styles.productPrice}>{product.price} rub</p>
            </div>
            <Counter product={product} onQuantityChange={onQuantityChange} />
          </div>
        ))}
      </div>
    </>
  );

}