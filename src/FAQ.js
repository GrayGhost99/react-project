import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Grid } from "@material-ui/core"


class FAQ extends Component {
    render() {
        return (
            <div>
                <h2>FAQ</h2>
                <p>Be sure to check out the FAQ before contacting us, your question may have already been answered!</p>
                
            <Grid container>
                <Grid item xs={12} sm={3}>
                <Flippy
                    flipOnHover={false} 
                    flipOnClick={true}
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r}
                    style={{ width: '250px', height: '150px' }}>

                    <FrontSide
                        style={{backgroundColor: '#B5B6EA',}}>
                        Question:
                        <hr/>
                        Are all guitarist listed on your Artists page endorsed by Picks Of Destiny?
                        </FrontSide>
                        <BackSide
                           style={{ backgroundColor: '#989AF0'}}>
                            Answer:
                            <hr/>
                            All of the artists listed have some form of affiliation with Picks Of Destiny.
                        </BackSide>
                </Flippy>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Flippy
                    flipOnHover={false} 
                    flipOnClick={true}
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r}
                    style={{ width: '250px', height: '150px' }}>

                    <FrontSide
                        style={{backgroundColor: '#B5B6EA',}}>
                        Question:
                        <hr/>
                        What is your minimum order?
                        </FrontSide>
                        <BackSide
                           style={{ backgroundColor: '#989AF0'}}>
                            Answer:
                            <hr/>
                            Our minimum order is 100 picks. A quantity of 1 is 100 picks.
                        </BackSide>
                </Flippy>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Flippy
                    flipOnHover={false} 
                    flipOnClick={true}
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r}
                    style={{ width: '250px', height: '150px' }}>

                    <FrontSide
                        style={{backgroundColor: '#B5B6EA',}}>
                        Question:
                        <hr/>
                        Does your ink wear off?
                        </FrontSide>
                        <BackSide
                           style={{ backgroundColor: '#989AF0'}}>
                            Answer:
                            <hr/>
                            Our supplier uses state-of-the-art ink to ensure it will not wear off.
                        </BackSide>
                </Flippy>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Flippy
                    flipOnHover={false} 
                    flipOnClick={true}
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r}
                    style={{ width: '250px', height: '150px' }}>

                    <FrontSide
                        style={{backgroundColor: '#B5B6EA',}}>
                        Question:
                        <hr/>
                        How so I know your picks are good quality?
                        </FrontSide>
                        <BackSide
                           style={{ backgroundColor: '#989AF0'}}>
                            Answer:
                            <hr/>
                            Check out our Reviews section to see what our customers are saying.
                        </BackSide>
                </Flippy>
                </Grid>
                </Grid>
            </div>
            
            
        );
    }
}

export default FAQ;