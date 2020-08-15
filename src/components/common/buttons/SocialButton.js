import React from 'react';

function socialButton(props) {
    return (
        <a href="#" className={"btn btn-block btn-social btn-" + props.type} onClick={() => props.onClick(props.type)}>
            <span className={"fa fa-" + props.type}></span> Sign in with {props.type}
        </a>
    );

}


export default socialButton;