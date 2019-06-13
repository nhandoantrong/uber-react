import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Footer from '../conponents/Footer/Footer';
import Headers from '../conponents/Header/Headers';
import Register from '../containers/Register/Register';
import LandingPage from '../containers/LandingPage/LandingPage';
import Booking from '../containers/Booking/Booking';


export default class CustomerTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
                <Headers />
                <Switch>
                    <Route path ="/" exact component={LandingPage} />
                    <Route path="/register" exact component={Register}/>
                    <Route path = "/booking" exact component = {Booking}/>
                </Switch>

                <Footer />
            </BrowserRouter>
        )
    }
}
