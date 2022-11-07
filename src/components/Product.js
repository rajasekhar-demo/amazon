import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Product = (props) => {
  //console.log(props.data);
  return (
    <Fragment>
      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src={props.data.productImage} alt="" />
            <div className="product-action">
              <a onClick={(data) => props.addtocart(props.data)} className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart"></i>
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart"></i>
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt"></i>
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search"></i>
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="">
              {props.data.name}
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>${props.data.price}</h5>
              <h6 className="text-muted ml-2">
                <del>${props.data.price}</del>
              </h6>
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
    </Fragment>
  );
};
