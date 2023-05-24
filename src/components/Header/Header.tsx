import { Link } from 'react-router-dom';
import { FC, memo } from 'react';
import { GiBasket } from 'react-icons/gi';
import styles from './Header.module.scss';

interface HeaderProps {
  quantity?: number;
}

const Header: FC<HeaderProps> = ({ quantity }) => {

  return (
    <>
      <header className={styles.header}>

      <div className={styles.burger}>
        <span className={styles.burgerSpan}></span>
      </div>

        <Link to='/'>
          <div className={styles.containerLogo}>
            <div className={styles.logo}>
              <div className={styles.logoEl} />
            </div>
            <span className={styles.title}>Awesome store</span>
          </div>
        </Link>

        <Link to='/cart'>
          <div className={styles.containerCart}>
            <GiBasket className={styles.cart} />
            <div className={styles.counter}>
              <p className={styles.counterText}>{quantity || 0}</p>
            </div>
          </div>
        </Link>

      </header>
    </>
  );

}

export default memo(Header);