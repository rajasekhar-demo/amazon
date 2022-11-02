import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios'
import { Product } from "./Product";

function Products() {

  let _cart = JSON.parse(localStorage.getItem('cart'))
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(_cart)
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)


  let url = 'https://633adc2ce02b9b64c61951aa.mockapi.io/api/v1/'
  useEffect(()=>{
    axios.get(`${url}/products`).then((res) => {
      console.log(res)
      setProducts(res.data)
    })
    console.log('Page load Effet')
  },[])

  const cartHandler = (data) => {
    setCart([...cart, data])
  }

  useEffect(()=>{
    console.log(cart)
    setCartCount(cart.length)

    let _cartTotal = 0
    cart.map((item) => {
      _cartTotal += parseFloat(item.price)
    })
    setCartTotal(_cartTotal)
    console.log(_cartTotal);
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])
  
  return (
    <Fragment>
      <p>Cart Count : {cartCount}</p>
      <p>Cart Total : {cartTotal}</p>
      <section className="section-products">
        <div className="container">
          <div className="row">
            {
              products.map((product) => {
                return <Product key={'p_'+product.id} data={product} addtocart={cartHandler} />
              })
            }
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Products;
