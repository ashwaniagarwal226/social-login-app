import React, { Component } from 'react';
import SocialButton from './SocialButton';
import '../App.css';
class SocialLogin extends Component {
    render() {

        return (
            <div className="container">
                <div class="row">
                    <div class="col">
                        <SocialButton type="facebook" />
                        <SocialButton type="twitter" />
                        <SocialButton type="github" />
                    </div>
                </div>
            </div>);
    };
};

export default SocialLogin;
