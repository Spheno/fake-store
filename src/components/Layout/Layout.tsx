import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

interface LayoutProps {
  quantity: number;
}

export const Layout: FC<LayoutProps> = ({ quantity }) => {

  return (
    <>
      <Header quantity={quantity} />
      <Outlet />
    </>
  );

}