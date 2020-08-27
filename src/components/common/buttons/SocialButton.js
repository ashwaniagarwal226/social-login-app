import React from 'react';

function socialButton(props) {
    return (
        <form id={"form" + props.type} action={process.env.REACT_APP_URL + "signin/" + props.type} method="POST">
            <input type="hidden" name="scope" value="public_profile" />
            <button className={"btn btn-block btn-social btn-" + props.type} onClick={() => props.onClick(props.type)}>
                <span className={"fa fa-" + props.type}></span> Sign in with {props.type}
            </button>
        </form>
    );

}

export default socialButton;