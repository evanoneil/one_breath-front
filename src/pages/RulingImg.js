import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import Helmet from 'react-helmet'

const styles = {
    sticky0: {
        animation: 'fadeIn 5s',
        webkitAnimation: 'fadeIn 5s',
        mozAnimation: 'fadeIn 5s',
        oAnimation: 'fadeIn 5s',
        msAnimation: 'fadeIn 5s',
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: 'url(https://houston-arrow.netlify.app/maps)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center center',
    },
    sticky1: {
        animation: 'fadeIn 5s',
        webkitAnimation: 'fadeIn 5s',
        mozAnimation: 'fadeIn 5s',
        oAnimation: 'fadeIn 5s',
        msAnimation: 'fadeIn 5s',
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: 'url(https://houston-arrow.netlify.app/maps)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center center',
    },
    sticky2: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        // backgroundColor: 'blue',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://houston-arrow.netlify.app/PDF/without-prejudice.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    sticky3: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    sticky4: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        // backgroundColor: 'green',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://houston-arrow.netlify.app/PDF/our-restrictions-are-designed-to-guarantee.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    sticky5: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundImage: 'url(https://houston-arrow.netlify.app/maps/mhv.png)',
        // backgroundSize: 'contain',
        // backgroundPosition: 'center center',
        // backgroundRepeat: 'no-repeat',
    },
    sticky6: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        // backgroundColor: 'green',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://houston-arrow.netlify.app/PDF/select-but-not-exclusive.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    sticky7: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: 'url(https://houston-arrow.netlify.app/maps/asthma.png)',
        // backgroundSize: 'contain',
        // backgroundPosition: 'center center',
        // backgroundRepeat: 'no-repeat',
    },
    sticky8: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        // backgroundColor: 'green',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://houston-arrow.netlify.app/maps/covid-vacc.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    sticky9: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        // backgroundColor: 'green',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://houston-arrow.netlify.app/maps/white.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    sticky10: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        backgroundColor: 'white',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //     backgroundImage: 'url(https://houston-arrow.netlify.app/maps/college.png)',
        //     backgroundSize: 'contain',
        //     backgroundPosition: 'center center',
        //     backgroundRepeat: 'no-repeat',
    },
    sticky11: {
        position: '-webkit-sticky',
        position: 'sticky',
        left: '0',
        width: '100%',
        margin: '0',
        // backgroundColor: 'green',
        zIndex: '0',
        top: '12.5vh',
        height: '75vh',
        /* Center everything inside */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://houston-arrow.netlify.app/maps/arrow.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    scrolls: {
        position: 'relative',
        padding: '0',
        maxWidth: '20rem',
        margin: '0 auto',
    },
    navbar: {
        position: 'fixed',
        display: 'flex',
        top: 0,
        right: 0,
        zIndex: 1,
        '& a': {
            display: 'block',
            fontSize: '20px',
            padding: '20px',
        },
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: 22,
        margin: '90px 0 10px',
        visibility: 'hidden',
    },
    description: {
        maxWidth: 600,
        margin: '10px auto 20vh',
        fontSize: 22,
        lineHeight: '28px',
        '& a': {
            color: 'black',
        },
    },
    pageSubtitle: {
        textAlign: 'center',
        fontSize: 22,
        color: '#888',
    },
    graphicContainer: {
        position: 'relative',
        padding: '0',
        // maxWidth: '20rem',
        margin: '0 auto',
    },
    graphic: {
        flexBasis: '100%',
        position: 'sticky',
        width: '100%',
        height: '60vh',
        top: '20vh',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& p': {
            fontSize: '5rem',
            fontWeight: 700,
            textAlign: 'center',
            color: '#fff',
        },
    },
    graphic1: {
        flexBasis: '100%',
        position: 'sticky',
        width: '100%',
        height: '60vh',
        top: '20vh',
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& p': {
            fontSize: '5rem',
            fontWeight: 700,
            textAlign: 'center',
            color: '#fff',
        },
    },
    scroller: {
        position: 'relative',
        // backgroundColor: '#f3f3f3',
        padding: '1rem',
    },
    step: {
        // height: '200vh',
        // margin: '50vh 0',
        // paddingTop: '50vh',
        // paddingBottom: '50vh',
        marginBottom: '100vh',
        color: '#fff',
        backgroundColor: 'black',
        zIndex: '99',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '20rem',
        position: 'relative',
    },
    stepfinal: {
        // height: '200vh',
        // margin: '50vh 0',
        // paddingTop: '50vh',
        // paddingBottom: '50vh',
        marginTop: '30vh',
        marginBottom: '0vh',
        color: '#fff',
        backgroundColor: 'black',
        zIndex: '99',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '20rem',
        position: 'relative',
    },
    button: {
        backgroundColor: '#3773ac',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
        padding: '6px',
        textAlign: 'center',
        display: 'block',
        maxWidth: 220,
        margin: '10px auto 30px',
        fontSize: 19,
        lineHeight: '28px',
        textDecoration: 'none',
    },
    subhed: {
        maxWidth: 600,
        margin: '10px auto 15px',
        fontSize: 22,
        lineHeight: '28px',
        '& a': {
            color: 'black',
        },
        textAlign: 'center',
    },
    whoUsing: {
        maxWidth: 960,
        margin: '30px auto 100px',
        fontSize: 19,
        lineHeight: '26px',
        gridAutoRows: 'minmax(100px, auto)',
        '& a': {
            color: 'black',
        },
        '& img': {
            width: '100%',
        },
        display: 'grid',
        gridTemplateColumns: '2fr 5fr',
        '& > div': {
            padding: '16px 0',
            borderTop: '1px solid #ccc',
            '&:nth-child(odd)': {
                paddingRight: '13px',
                borderRight: '1px solid #ccc',
            },
            '&:nth-child(even)': {
                paddingLeft: '13px',
            },
        },
    },
};

class Rulingimg extends PureComponent {
    state = {
        data: 0,
        steps: [10, 20, 30, 40],
        progress: 0,
    };

    onStepEnter = e => {
        const { data, entry, direction } = e;
        this.setState({ data });
    };

    onStepExit = ({ direction, data }) => {
        if (direction === 'up' && data === this.state.steps[0]) {
            this.setState({ data: 0 });
        }
    };

    onStepProgress = ({ progress }) => {
        this.setState({ progress });
    };

    render() {
        const { data, steps, progress } = this.state;
        const { classes } = this.props;

        return (

            <div>
                <Helmet>
                    <link rel='stylesheet' type='text/css' media='screen' href='https://houston-arrow.netlify.app/style.css' />

                    <link rel='stylesheet' type='text/css' media='screen' href='https://houston-arrow.netlify.app/scrollama.css' />
                </Helmet>
                <p className="description">
                    The regulations were meticulous. Writing in the East Texas Historical Journal, Charles O. Cook and Barry J. Kaplan note that <a class="blue" href="https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?referer=https://www.google.com/&httpsredir=1&article=2670&context=ethj" target="_blank">the restrictions</a> covered everything from “renovation of existing structures to the placement of garbage cans and clotheslines.” Likewise, they continue, “the restrictions also excluded non-white residents, and, by means of the infamous ‘gentlemen's agreement’ Jews as well.”
                </p>

                <p className="bounce">↓</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="graphicContainer">

                    {/* <div className={classes.scroller}> */}



                    <article className="scrolls">
                        <div className={data}>
                            {/* <p>pinned image</p> */}
                        </div>
                        <Scrollama
                            onStepEnter={this.onStepEnter}
                            onStepExit={this.onStepExit}
                            progress
                            onStepProgress={this.onStepProgress}
                            offset=".99"

                        >
                            <Step data={classes.sticky0} key="0">
                                <div className="step" >
                                </div>
                            </Step>
                            <Step data={classes.sticky2} key="1">
                                <div className="step" >
                                    <h3 class="tc bold pa2 bg-green ">Advertisements confirmed: “You will have good neighbors. You may be sure."
                                    </h3>
                                </div>
                            </Step>
                            <Step data={classes.sticky2} key="2">
                                <div className="step" >
                                    {/* <p>hi</p> */}
                                </div>
                            </Step>
                            <Step data={classes.sticky4} key="3">
                                <div className="step" >
                                    <h3 class="tc bold pa2 bg-black">The promise of exclusivity alone was not enough. </h3>
                                </div>
                            </Step>
                            <Step data={classes.sticky4} key="4">
                                <div className="step" >
                                    <p></p>

                                </div>
                            </Step>
                            <Step data={classes.sticky6} key="5">
                                <div className="step final" >
                                    <h3 class="tc bold pa2 bg-green">The same ads and articles also promised sky-rocketing returns on investments in the development, along with support of the city to protect, then bolster, those investments.</h3>                                </div>
                            </Step>

                            <Step data={classes.sticky7} key="6">
                                <div className="step" >
                                    <p></p>

                                </div>
                            </Step>
                            <Step data={classes.sticky7} key="7">
                                <div className="step" >
                                    <h3 class="tc bold pa2 bg-white green ">The connection between the neighborhood and the city’s very future was right there to read.
                                    </h3>

                                </div>
                            </Step>
                        </Scrollama>

                    </article>

                </div>

            </div>
        );
    }
}

export default injectSheet(styles)(Rulingimg);
