import React from 'react';

function socialButton(props) {
    return (
        <div className="App">
            <a href="#" className={"btn btn-block btn-social btn-" + props.type}>
                <span className={"fa fa-" + props.type}></span> Sign in with {props.type}
            </a>
        </div>
    );

}


export default socialButton;