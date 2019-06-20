import React, {  Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Footer from '../conponents/Footer/Footer';
import Headers from '../conponents/Header/Headers';

export const LandingPage = React.lazy(() => import('../containers/LandingPage/LandingPage'))
export const Register = React.lazy(() => import('../containers/Register/Register'))
export const Booking = React.lazy(() => import('../containers/Booking/Booking'))
export const Contact = React.lazy(() => import('../containers/Contact/Contact'))
export const Tutorial = React.lazy(() => import("../containers/Tutorial/Tutorial"))
export const Terms = React.lazy(() => import("../containers/Terms/Terms"))
export const PageNotFound = React.lazy(() => import("../containers/PageNotFound/PageNotFound"))


const CustomerTemplate = () => {

    const changeToBookingIfLoggedIn= (Component) =>{
        if (localStorage.getItem("name"))
            return <Redirect to ="/booking"/>
         return Component
    }

    const changeToRegisterIfNotLoggedIn = (Component) =>{
        if (!localStorage.getItem("name"))
            return <Redirect to ="/register"/>
         return Component
    }


    return (
        <BrowserRouter>
            <Headers />
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/" exact render={({history})=>changeToBookingIfLoggedIn(<LandingPage history={history} />)} />
                    <Route path="/register" exact  render={({history})=>changeToBookingIfLoggedIn(<Register history={history}/>)}/>
                    <Route path="/booking" exact  render={({history})=>changeToRegisterIfNotLoggedIn(<Booking history={history} />)} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/tutorial" exact component={Tutorial} />
                    <Route path="/terms" exact component={Terms} />
                    <Route path="*" component = {PageNotFound } />
                </Suspense>

            </Switch>

            <Footer />
        </BrowserRouter>
    )

}
export default CustomerTemplate
