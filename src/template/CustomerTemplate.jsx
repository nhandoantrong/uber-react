import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Footer from '../conponents/Footer/Footer';
import Headers from '../conponents/Header/Headers';
import Register from '../containers/Register/Register';
import LandingPage from '../containers/LandingPage/LandingPage';


export default class CustomerTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
                <Headers />
                <Switch>
                    <Route path ="/" exact component={LandingPage} />
                    <Route path="/register" exact component={Register}/>
                </Switch>

                <Footer />
            </BrowserRouter>
        )
    }
}
