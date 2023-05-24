import { FC, memo } from 'react';
import styles from './Main.module.scss';
import { MainProps } from './Main.types';
import Card from '../Card/Card';

const Main: FC<MainProps> = ({ products, onButtonClick, userCart, onQuantityChange }) => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>

          {products.map((product) => (
            <Card
            key={product.id}
            product={product} onButtonClick={onButtonClick}
            inCart={userCart.some(cartItem => cartItem.id === product.id)}
            onQuantityChange={onQuantityChange}
            userCart={userCart}
            />
          ))}
          
        </section>
      </main>
    </>
  );

}

export default memo(Main);