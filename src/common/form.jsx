import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tel: '',
            disabled: ''
        }
        this.setState({
            disabled: false
        })
    }
    handleHtmlControlChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("tel", this.state.tel);
        const config = {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }
        var url = "https://etebarkala.com/black-friday/index.php";
        axios.post(url, formData, config)
            .then((response) => {

                console.log(response.data);

                if (response.data.result == true) {
                    toast.success("اطلاعات شما با موفقیت ثبت شد");
                    this.state.disabled = false;

                } else if (response.data.result == false) {
                    toast.error("شماره موبایل اشتباه وارد شده است");
                    this.state.disabled = false;
                } else if (response.data.result == "duplicate") {
                    toast.error("شماره موبایل وارد شده تکراری است");
                    this.state.disabled = false;
                }

            })
        const tel = this.state.tel;
        this.setState({
            tel: ''
        });
    }
    render() {
        const { tel } = this.state;
        return (
            <div className={this.props.class}>
                <h3 className="title-pl">از همه زودتر با خبر شو ، چند ساعت قبل پروموشن منتظر پیامک ما باش</h3>
                <form action="#" className="form-black" onSubmit={this.handleSubmit}>
                    <input type="text" value={tel} className="form-control input-txt" onChange={this.handleHtmlControlChange} placeholder="شماره موبایلت رو وارد کن" name="tel" />
                    <input type="submit" className="btn btn-color" disabled={this.state.disabled} onClick={() => this.state.disabled = true} value="ثبتش کن" />
                </form>
            </div>
        )
    }
}

export default Form;