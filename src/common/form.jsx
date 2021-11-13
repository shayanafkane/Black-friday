import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tel: '',
        }

    }
    handleHtmlControlChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {

        let formData = new FormData();
        formData.append("tel", this.state.tel);
        event.preventDefault();
        const config = {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }
        var url = "https://etebarkala.com/black-friday/index.php";
        axios.post(url, formData, config)
            .then((response) => {

                console.log(response.data);
                if (response.data.result == true) {
                    toast.success("اطلاعات شما با موفقیت ثبت شد");

                } else if (response.data.result == false) {
                    toast.error("شماره موبایل اشتباه وارد شده است");
                } else if (response.data.result == "duplicate") {
                    toast.error("شماره موبایل وارد شده تکراری است");
                }
            })

    }
    render() {
        const { tel } = this.state;

        return (
            <div className="box-form-blackfriday">
                <h3> برای اینکه زودتر از همه از تخفیف ها با خبر شید فرم زیر را پر کنید !</h3>
                <form action="#" className="form-black" onSubmit={this.handleSubmit}>
                    <input type="text" value={tel} className="form-control" onChange={this.handleHtmlControlChange} placeholder="شماره تماس خودرا وارد کنید" name="tel" />
                    <input type="submit" className="btn btn-danger" value="ارسال اطلاعات" />
                </form>

                <ToastContainer />

            </div>
        )
    }
}

export default Form;