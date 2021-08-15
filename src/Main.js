import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Products from "./Products";
import Artists from "./Artists";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Reviews from "./Reviews";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Picks Of Destiny</h1>
                    <ul className="header">
                        <li><NavLink to="/">Products</NavLink></li>
                        <li><NavLink to="/artists">Artists</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="/Reviews">Reviews</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Products}/>
                        <Route path="/artists" component={Artists}/>
                        <Route path="/pricing" component={Pricing}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route path="/Reviews" component={Reviews}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;