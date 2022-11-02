import { Fragment, useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let _cart = JSON.parse(localStorage.getItem("cart"));
    let _quantityCart = [];
    let total = 0;

    _cart.map((item) => {
      total += parseFloat(item.price);
      let qcIndex = _quantityCart.findIndex((x) => x.id === item.id);
      if (qcIndex == -1) {
        _quantityCart.push({
          ...item,
          quantity: 1,
        });
      } else {
        _quantityCart[qcIndex].quantity++;
      }
      //console.log(item, index)
    });
    setTotal(total);
    console.log(_quantityCart);
    setCart(_quantityCart);
  }, []);

  const handleQuantity = (type, id) => {
    let index = cart.findIndex((x) => x.id === id);
    let _cart = cart;

    if (type == "plus") {
      _cart[index].quantity++;
      console.log("Increase quantity", id);
    } else {
      if (_cart[index].quantity > 1) _cart[index].quantity--;
      console.log("Decrease quantity", id);
    }
    handleLocalCart(_cart);
    setCart([..._cart]);
  };

  const handleLocalCart = (_cart) => {
    let list = []
    _cart.map(item => {
      for(let i = 1; i <= item.quantity; i++)
      list.push(item);
    });
    localStorage.setItem('cart', JSON.stringify(list))
  }

  const handleDelete = (id) => {
    let index = cart.findIndex((x) => x.id === id);
    let _cart = cart;
    _cart.splice(index, 1); 
    setCart([..._cart]);
    handleLocalCart(_cart);
  }

  return (
    <Fragment>
      {/* <!-- Cart Start --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cart.length &&
                  cart.map((item) => {
                    return (
                      <tr>
                        <td className="align-middle">
                          <img
                            src="img/product-1.jpg"
                            alt=""
                            style={{ width: "50px" }}
                          />{" "}
                          {item.productName}
                        </td>
                        <td className="align-middle">₹{item.price}</td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: "100px" }}
                          >
                            <div className="input-group-btn">
                              <button
                                onClick={(type, id) =>
                                  handleQuantity("minus", item.id)
                                }
                                className="btn btn-sm btn-primary btn-minus"
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <span style={{ padding: "5px 10px" }}>
                              {item.quantity}
                            </span>
                            {/* <input
                                  type="text"
                                  className="form-control form-control-sm bg-secondary border-0 text-center"
                                  value="1"
                                /> */}
                            <div className="input-group-btn">
                              <button
                                onClick={(type, id) =>
                                  handleQuantity("plus", item.id)
                                }
                                className="btn btn-sm btn-primary btn-plus"
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          ₹{item.price * item.quantity}
                        </td>
                        <td className="align-middle">
                          <button onClick={(id)=>handleDelete(item.id)} className="btn btn-sm btn-danger">
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                {/* <tr>
                  <td className="align-middle">
                    <img src="img/product-2.jpg" alt="" style={{width: "50px"}} />{" "}
                    Product Name
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{width: "100px"}}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 text-center"
                        value="1"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="img/product-3.jpg" alt="" style={{width: "50px"}} />{" "}
                    Product Name
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{width: "100px"}}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 text-center"
                        value="1"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="img/product-4.jpg" alt="" style={{width: "50px"}} />{" "}
                    Product Name
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{width: "100px"}}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 text-center"
                        value="1"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="img/product-5.jpg" alt="" style={{width: "50px"}} />{" "}
                    Product Name
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{width: "100px"}}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 text-center"
                        value="1"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                {/* <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                /> */}
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>₹{total}</h6>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div> */}
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>₹{total}</h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Cart End --> */}
    </Fragment>
  );
};

export default Cart;
