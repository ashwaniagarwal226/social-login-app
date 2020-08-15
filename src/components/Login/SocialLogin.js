import React, { Component } from 'react';
import SocialButton from '../common/buttons/SocialButton';
import '../../App.css';
import API from '../../utils/api';

class SocialLogin extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {}

        }
        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin = (type) => {

        API.get("/loginSubmit?type=" + type)
            .then(res => {
                const persons = res.data;
                this.setState({data:persons});
            })

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
