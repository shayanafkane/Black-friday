import React from 'react';
import Form from './form';
import Product from './Product-box';


const Box = () => {
    return (
        <main>
            <div className="container-blend">
                <img src="https://res.cloudinary.com/dlsw1zmae/image/upload/v1637396670/etebarkala/Shegeft-Jomeh-Logo-with-EK-Logo-8_khmbz7.gif" style={{ mixBlendMode: "screen" }} className="img-custom" alt="" />

            </div>

            <div className="header-box container">


                <div className="header-item header-1">
                    <div class="tick" data-did-init="handleTickInit">
                        <div data-repeat="true" data-layout="horizontal center fit"
                            data-transform="preset(d, h, m, s) -> delay">

                            <div class="tick-group">

                                <div data-key="value" data-repeat="true"
                                    data-transform="pad(00) -> split -> delay">

                                    <span data-view="flip"></span>

                                </div>

                                <span data-key="label" data-view="text" class="tick-label"></span>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
            <div class="mouse_scroll">

                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                <div className="mr-custom" style={{ marginRight: "4px;" }}>
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows doi"></span>
                    <span class="m_scroll_arrows trei"></span>
                </div>
            </div>
            <Form class="box-form-blackfriday" />
            <div className="des">

                <p className="text-white">این جشنواره در روز <b className="bold" > جمعه 5 آذر </b >  اجرا میشه ! <br /> <span className="small-txt">بیشتر از 100 محصول تخفیف واقعی دارن که خریدشون دلـــچسب میشه . راستی ، اگه تهران هستی همون جمعه برات پیک میشه</span></p>
            </div>
            <a className="btn btn-danger btn-color2" href="https://etebarkala.com">ورود به فروشگاه</a>
            <h2 className="title-product-box">چه کالاهایی تخفیف دارن! </h2>
            <div className="black-friday-bg">
                <Product img="assets/img/cat-8.png" offer="200/000 تومان تخفیف" img2="assets/img/cat-1.png" offer2="1/000/000 تومان تخفیف" />
                <Product img="assets/img/cat-2.png" offer="400/000 تومان تخفیف" img2="assets/img/cat-3.png" offer2="150/000 تومان تخفیف" />
                <Product img="assets/img/cat-4.png" offer="200/000 تومان تخفیف" img2="assets/img/cat-5.png" offer2="300/000 تومان تخفیف" />
                <Product img="assets/img/cat-9.png" offer="1/200/000 تومان تخفیف" img2="assets/img/cat-10.png" offer2="1/000/000 تومان تخفیف" />
                <Product img="assets/img/cat-6.png" offer="10% تخفیف" img2="assets/img/cat-7.png" offer2="20% تخفیف" />
                <h4 className="about-h4">اگر ما رو نمیشناسی حتما <a className="btn-end" href="https://etebarkala.com/about/">درباره ما</a>  رو بخون  </h4>
            </div>
        </main>
    );
}

export default Box;