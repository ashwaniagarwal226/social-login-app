import React, { Component } from 'react';
import SocialButton from '../common/buttons/SocialButton';
import '../../App.css';
import LoginApi from './Apis/LoginApi';

class SocialLogin extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {}

        }
        this.submitLogin = this.submitLogin.bind(this);
        this.LoginApi = new LoginApi();
    }

    submitLogin = (type) => {
        this.LoginApi.loginSocialSumbit(type).then(res => {
            return res.data;
        }).catch(error => {
            console.error(error);
        });


    }

    render() {

        return (
            <div className="row">
                <div className="col">
                    <SocialButton type="facebook" onClick={this.submitLogin} />
                    <SocialButton type="twitter" onClick={this.submitLogin} />
                    <SocialButton type="github" onClick={this.submitLogin} />
                </div>
            </div>
        );
    };
};

export default SocialLogin;
