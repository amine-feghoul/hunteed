import React from 'react'
import './Landing.css'
import cocaColaLogo from  '../../../images/landing/logos/coca-cola-logo-svg.png'
function Landing() {
    return (

        <div className="landing-container">
            <div className = "landing-wrapper">
                <h1>Get the <span id="right-condidates">right candidates  </span> recommended by the best recruitment agencies</h1>
                <p>Hunteed is the online solution that manages all of your outsourced recruitment. We choose the agencies, you meet the candidates.</p>
                <div className="landing-btns">
                     <a className="request-demo"> Request a demo</a> 
                     <span>or</span> 
                     <a className="publish-job">publish a job</a></div>
           


                </div>
                <div className="landing-custumors">
                    <p> they trust Hunteed</p>
                    <img src={cocaColaLogo}/>
                    <img src={cocaColaLogo}/>
                    <img src={cocaColaLogo}/>
                    <img src={cocaColaLogo}/>
                    <img src={cocaColaLogo}/>
                    <img src={cocaColaLogo}/>

                </div>
        </div>
    )
}

export default Landing
