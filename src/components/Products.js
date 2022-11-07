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
    axios.get(`${url}/products?page=3&per_page=2`).then((res) => {
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
      {/* <!-- Shop Product Start --> */}
      <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                    {/* Products view controls starts here */}
                    {/* <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                            </div>
                            <div className="ml-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Latest</a>
                                        <a className="dropdown-item" href="#">Popularity</a>
                                        <a className="dropdown-item" href="#">Best Rating</a>
                                    </div>
                                </div>
                                <div className="btn-group ml-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">10</a>
                                        <a className="dropdown-item" href="#">20</a>
                                        <a className="dropdown-item" href="#">30</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Products view controls ends here */}
                    
                    {
                      products.map((product, i) => {
                        if(i < 9)
                          return <Product key={'p_'+product.id} data={product} addtocart={cartHandler} />
                      })
                    }

                    {/* <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-9.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Pagination starts here */}
                    <div className="col-12">
                        <nav>
                          <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="#"><span>Previous</span></a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                          </ul>
                        </nav>
                    </div>
                    {/* Pagination ends here */}
                </div>
            </div>
            {/* <!-- Shop Product End --> */}
      <p>Cart Count : {cartCount}</p>
      <p>Cart Total : {cartTotal}</p>
      <section className="section-products">
        <div className="container">
          <div className="row">
            
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Products;
