import React, { Component } from "react";

class FAQ extends Component {
    render() {
        return (
            <div>
                <h2>FAQ</h2>
                <p>Be sure to check out the FAQ before contacting us, your question may have already been answered!</p>
                <ol className= "centerList">
                    <li>Are all guitarists listed on your artists page endorsed by Picks Of Destiny?</li>
                    (//Make animated answer box)
                    <li>What is your minimum order for guitar picks?</li>
                    (//Make animated answer box)
                    <li>Does your ink wear off?</li>
                    (//Make animated answer box)
                </ol>
            </div>
        );
    }
}

export default FAQ;