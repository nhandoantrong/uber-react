import React  from 'react'
import "./LandingPage.scss"
const LandingPage = props => {

    const handleOnclick = () => {
        props.history.push("/register")
    }


    return (
        <div className="landing-page">
            <div className="liar" style={{ height: "50px" }}></div>
            <img src="/img/city.jfif" alt="city" />
            <div className="landing-content">
                <img src="/img/car.jpg" alt="" />
                <h1>Your ride, on demand</h1>
                <p>Whether you're headed to work, the airport or out of the town, Uber connects you with a reliable
                        ride in minutes.<br /> One tap and a car comes directly to you.
                    </p>
                <button onClick={handleOnclick}><span>Register with Phone</span> <i className="fas fa-arrow-right"></i> </button>
            </div>
        </div>
    )

}

export default LandingPage