import { FC, memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Counter.module.scss';
import { CounterProps } from './Counter.types';

const Counter: FC<CounterProps> = ({ onQuantityChange, product }) => {
  let location = useLocation();
  const [isMain, setIsMain] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [location])

  const [amountValue, setAmountValue] = useState<number>(product.quantity || 1);

  useEffect(() => {
    onQuantityChange({ value: amountValue, id: product.id })
  }, [amountValue])

  const handleDecrease = () => {
    if (amountValue > 1) {
      setAmountValue(amountValue - 1);
    } else {
      setAmountValue(1)
    }
  };

  const handleIncrease = () => {
    setAmountValue(amountValue + 1);
  };

  return (
    <>
      <div className={isMain ? styles.main : styles.cart}>
        {!isMain && <p className={styles.text}>{amountValue}</p>}
        <button className={styles.button} onClick={handleDecrease}>-</button>
        {isMain && <p className={styles.text}>{amountValue} шт</p>}
        <button className={styles.button} onClick={handleIncrease}>+</button>
      </div>
    </>
  );

}

export default memo(Counter);