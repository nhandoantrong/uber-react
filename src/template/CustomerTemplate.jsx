import React, {  Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Footer from '../conponents/Footer/Footer';
import Headers from '../conponents/Header/Headers';

const LandingPage = React.lazy(() => import('../containers/LandingPage/LandingPage'))
const Register = React.lazy(() => import('../containers/Register/Register'))
const Booking = React.lazy(() => import('../containers/Booking/Booking'))
const Contact = React.lazy(() => import('../containers/Contact/Contact'))
const Tutorial = React.lazy(() => import("../containers/Tutorial/Tutorial"))
const Terms = React.lazy(() => import("../containers/Terms/Terms"))

const CustomerTemplate = () => {

    const changeToBookingIfLoggedIn= (Component) =>{
        if (localStorage.getItem("name"))
            return <Redirect to ="/booking"/>
         return <Component />
    }

    const changeToRegisterIfNotLoggedIn = (Component) =>{
        if (!localStorage.getItem("name"))
            return <Redirect to ="/register"/>
         return <Component />
    }


    return (
        <BrowserRouter>
            <Headers />
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/" exact render={()=>changeToBookingIfLoggedIn(LandingPage)} />
                    <Route path="/register" exact  render={()=>changeToBookingIfLoggedIn(Register)}/>
                    <Route path="/booking" exact  render={()=>changeToRegisterIfNotLoggedIn(Booking)} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/tutorial" exact component={Tutorial} />
                    <Route path="/terms" exact component={Terms} />
                </Suspense>

            </Switch>

            <Footer />
        </BrowserRouter>
    )

}
export default CustomerTemplate
