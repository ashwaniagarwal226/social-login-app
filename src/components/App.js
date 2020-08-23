import React, { Component } from 'react';
import Urls from "./Urls";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

    render() {

        return (
            <div className="container">
                <Router>
                    {
                        Urls.map((route, index) => (
                            <Route key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            ></Route>
                        ))
                    }
                </Router>
            </div>

        );


    }

};

export default App;