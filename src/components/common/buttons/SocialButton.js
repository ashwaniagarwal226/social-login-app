import React from 'react';

function socialButton(props) {
    return (
        <button  className={"btn btn-block btn-social btn-" + props.type} onClick={() => props.onClick(props.type)}>
            <span className={"fa fa-" + props.type}></span> Sign in with {props.type}
        </button>
    );

}


export default socialButton;