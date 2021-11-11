import React from 'react';
import Slider1 from './Slider';


const Box = () => {
    return (
        <main>
            <div className="header-box container">
                <div className="row">

                    <div className="col-lg-6 header-item header-1">
                        <h1>شگفت جمعه</h1>
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
                    <div className="col-lg-6 header-item">
                        <div className="box-black-friday">
                            <img src="assets/img/3.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-form-blackfriday">
                <h3> برای اینکه زودتر از همه از تخفیف ها با خبر شید فرم زیر را پر کنید !</h3>
                <form action="#" className="form-black">
                    <input type="text" className="form-control w-50" placeholder="شماره تماس خودرا وارد کنید" name="tel" />
                    <input type="submit" className="btn btn-danger" value="ارسال اطلاعات" />
                </form>
            </div>
            <Slider1 />


          


        </main>
    );
}

export default Box;