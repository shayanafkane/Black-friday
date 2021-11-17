import React from 'react';
class Product extends React.Component {
    render() {
        return (
            <>

                <hr />
                <div className="product-item conteiner">
                    <div className="row">
                        <div className="col-lg-6 display-product " data-aos="fade-right">
                            <div className="col-lg-4 img-product">
                                <img src={this.props.img}
                                    className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 text-product">
                                <div className="box-text-product">
                                    
                                    <div className="box-offer-text">
                                        <h4 className="badge rounded-pill bg-danger">{this.props.offer}</h4>
                                    </div>
                                </div>
                            </div>
                                <button className="btn btn-success btn-price-custom">خرید این محصول</button>

                        </div>
                        <div className="col-lg-6 display-product" data-aos="fade-left">
                            <div className="col-lg-4 img-product">
                                <img src={this.props.img2}
                                    className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 text-product">
                                <div className="box-text-product">
                                   
                                    <div className="box-offer-text">
                                        <h4 className="badge rounded-pill bg-danger">{this.props.offer2}</h4>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success btn-price-custom">خرید این محصول</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Product;