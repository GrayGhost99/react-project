import React, { Component } from "react";
import Music from "./images/Music.png"

class Pricing extends Component {
    render() {
        return (     
            <div>
                <div>
                    <img className = "Music" src = {Music} alt = "Music"/>
                </div>
                  <div>                  
                    <p><b>PLAIN PICKS ARE $26 PER 100pc BAG; BRANDED PICKS ARE $33 PER 100pc BAG</b></p>
                    <hr /> 
                    <p>*Quantity Pricing only applies when using the same artwork, ink color and pick shape. You may change your pick color and/or gauge by the bag.</p>
                    <p>THERE ARE NO ARTWORK OR SETUP FEES, AND WE CHARGE THE SAME PRICE FOR SINGLE AND FULL COLOR IMPRINTS.</p>
                    <p>Our minimum order is 1 Bag (100 Guitar Picks)</p>
                </div>
            </div>
        );
    }
}

export default Pricing;