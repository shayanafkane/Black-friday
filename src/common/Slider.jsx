import React, { Component } from 'react'
import axios from "axios";
import Aos from 'aos';
import jQuery from 'jquery';


class Slider1 extends Component {
  constructor() {

    super();





  }
  state = {
    products: []
  }
  componentDidMount() {




    this.getData();
    Aos.init({


    });
  }
  async getData() {

    const response =
      await axios.post("https://etebarkala.com/wooapi/woo.php", null, {
        params: {
          stock_status: "instock",


        }

      }).then(response => {
        console.log(response.data)
        this.setState({ products: response.data })
      }).catch(error => console.log(error));

  }

  render() {
    return (

      <div style={{ overflow: "hidden" }}>

      

        <section className="carousel-ek" data-aos="fade-up" data-aos-delay="300">

          <div className="carousel__container">
            {this.state.products.map(product => {

              return (

                <div className="carousel-item2 carsouel-bg2">

                  <div className="not-offer">

                    <img className="carousel-item__img " alt="" src={product.images[0].src} />
                  </div>

                  <div className="info">
                    <div className="name-product-box">

                      <a>
                        <h3 id="limited" className="name-product">{product.name}</h3>
                      </a>
                    </div>
                    <div className="stars">

                      {/* <h5 className="offer-price ek-price"> */}

                        {/* <NumberFormat
                          value={product.price}
                          className="ek-price dir-rtl"
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={''}
                          renderText={(value, props) => <div {...props}> {value} </div>}
                        /> */}
                     
                        {/* {product.price} */}
                      {/* </h5> */}

                      <div className="price-btn">
                        <a href="#" className="btn btn-danger btn-price" >به زودی</a>
                      </div>

                    </div>

                  </div>
                </div>
              )
            })}

          </div>
        </section>

      </div>

    )
  }
}
export default Slider1;