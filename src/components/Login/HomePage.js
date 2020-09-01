import React, { Component } from 'react';

class HomePage extends Component {

    render() {

        return (
            <div className="row">
                <form action={process.env.REACT_APP_URL + "connect/facebook"} method="post">
                    <div class="formInfo">
                        <p>
                            Spring Social Showcase is connected to your facebook account.
                            Click the button if you wish to disconnect.
    </p>
                    </div>
                    <button type="submit">Disconnect</button>
                    <input type="hidden" name="_method" value="delete" />
                </form>
            </div >
        );
    };


}

export default HomePage;