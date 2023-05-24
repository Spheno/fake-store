import { FC, memo } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';
import Counter from '../Counter/Counter';

const Card: FC<CardProps> = ({ product, onButtonClick, inCart, onQuantityChange, userCart }) => {
  const productInCart = userCart.find(el => el.id === product.id);
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.containerImg} style={{ backgroundImage: `url(${product.image})` }} />
        <div className={styles.containerInfo}>
          <h3 className={styles.productName}>{product.title}</h3>
          <p className={styles.productRating}>{product.rating.rate} rating</p>
          {inCart && productInCart ? <Counter product={productInCart} onQuantityChange={onQuantityChange} /> : <div className={styles.containerButton}>
            <p className={styles.productPrice}>{product.price} rub</p>
            <button
              className={styles.buttonAdd}
              type="button"
              aria-label="добавить"
              onClick={() => onButtonClick({ ...product, quantity: 1 })}
            >
              ADD
            </button>
          </div>}
        </div>
      </div>
    </>
  );

}

export default memo(Card);