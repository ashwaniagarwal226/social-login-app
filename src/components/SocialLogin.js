import React, { Component } from 'react';
import SocialButton from './SocialButton';

class SocialLogin extends Component {
    render() {

        return (
            <div>
                <SocialButton type="facebook" />
                <SocialButton type="twitter" />
            </div>);
    };


};

export default SocialLogin;
