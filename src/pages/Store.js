import { Fragment } from "react";
import Products from "../components/Products";

const Store = () => {
    return <Fragment>
        {/* <!-- Breadcrumb Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <a className="breadcrumb-item text-dark" href="#">Home</a>
                    <a className="breadcrumb-item text-dark" href="#">Shop</a>
                    <span className="breadcrumb-item active">Shop List</span>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Shop Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            {/* <!-- Shop Sidebar Start --> */}
            <div className="col-lg-3 col-md-4">
                {/* <!-- Price Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" checked id="price-all"> */}
                            <label className="custom-control-label" for="price-all">All Price</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="price-1"> */}
                            <label className="custom-control-label" for="price-1">$0 - $100</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="price-2"> */}
                            <label className="custom-control-label" for="price-2">$100 - $200</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="price-3"> */}
                            <label className="custom-control-label" for="price-3">$200 - $300</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="price-4"> */}
                            <label className="custom-control-label" for="price-4">$300 - $400</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            {/* <input type="checkbox" className="custom-control-input" id="price-5"> */}
                            <label className="custom-control-label" for="price-5">$400 - $500</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Price End --> */}
                
                {/* <!-- Color Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" checked id="color-all"> */}
                            <label className="custom-control-label" for="price-all">All Color</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="color-1"> */}
                            <label className="custom-control-label" for="color-1">Black</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="color-2"> */}
                            <label className="custom-control-label" for="color-2">White</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="color-3"> */}
                            <label className="custom-control-label" for="color-3">Red</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="color-4"> */}
                            <label className="custom-control-label" for="color-4">Blue</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            {/* <input type="checkbox" className="custom-control-input" id="color-5"> */}
                            <label className="custom-control-label" for="color-5">Green</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Color End --> */}

                {/* <!-- Size Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" checked id="size-all"> */}
                            <label className="custom-control-label" for="size-all">All Size</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="size-1"> */}
                            <label className="custom-control-label" for="size-1">XS</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="size-2"> */}
                            <label className="custom-control-label" for="size-2">S</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="size-3"> */}
                            <label className="custom-control-label" for="size-3">M</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            {/* <input type="checkbox" className="custom-control-input" id="size-4"> */}
                            <label className="custom-control-label" for="size-4">L</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            {/* <input type="checkbox" className="custom-control-input" id="size-5"> */}
                            <label className="custom-control-label" for="size-5">XL</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Size End --> */}
            </div>
            {/* <!-- Shop Sidebar End --> */}


            <Products />
        </div>
    </div>
    {/* <!-- Shop End --> */}
    </Fragment>
}

export default Store;