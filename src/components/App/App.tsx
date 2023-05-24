import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Layout } from '../Layout/Layout';
import Main from '../Main/Main';
import { Cart } from '../Cart/Cart';
import { getProducts } from '../../utils/StoreApi';
import { IProduct } from '../../types/types';

import { ERR_STORE_DATA } from '../../utils/constants'

function App() {
  const [products, setProducts] = useState<IProduct[]>()
  const [userCart, setUserCart] = useState(() => {
    const localData = localStorage.getItem('userCart')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log(ERR_STORE_DATA);
      })
  }, [])

  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(userCart));
  }, [JSON.stringify(userCart)]);

  const handleAddProduct = (product: IProduct) => {
    setUserCart([product, ...userCart])
  }

  const handleChangeQuantityProduct = (data: { value: number, id: number }) => {
    const change = userCart.map((el: IProduct) => {
      if (el.id === data.id) {
        el.quantity = data.value
      }
      return el
    })
    setUserCart(change)
    localStorage.setItem('userCart', JSON.stringify(change));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout quantity={userCart.length} />}>
          {products && <Route path="/" element={
            <Main
              products={products}
              onButtonClick={handleAddProduct}
              userCart={userCart}
              onQuantityChange={handleChangeQuantityProduct}
            />} />}
          <Route path="cart" element={
            <Cart
              userCart={userCart}
              onQuantityChange={handleChangeQuantityProduct}
            />} />
        </Route>
      </Routes>
    </>
  );

};

export default App;