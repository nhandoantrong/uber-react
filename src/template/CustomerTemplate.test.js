import React from "react";
import { shallow,mount } from "enzyme";
import { Route } from 'react-router-dom';



import CustomerTemplate, { Booking } from "./CustomerTemplate"
import TestingProvider from "../helpers/TestingProvide";
import {Contact,Terms, Tutorial,PageNotFound} from "./CustomerTemplate"

let pathMap = {};

describe("customer template static testing", () => {
    beforeAll(() => {
        const component = mount(
            <TestingProvider>
                <CustomerTemplate />
            </TestingProvider>);
        pathMap = component.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component ? routeProps.component : routeProps.render;
            return pathMap;
        }, {});
        localStorage.setItem("name","Nhan");
        localStorage.setItem("gender","male");


    })
    


    test('should show contact', () => {
        expect(pathMap['/contact']).toBe(Contact);
    })
    test('should show Terms', () => {
        expect(pathMap['/terms']).toBe(Terms);
    })
    test('should show Tutorial', () => {
        expect(pathMap['/tutorial']).toBe(Tutorial);
    })

    test('should show Page not found', () => {
        expect(pathMap['*']).toBe(PageNotFound);
    })

    // test('should show booking', () => {
    //     const path = pathMap['/']();
    //     con
    // })

})


describe("test with conditional page ", ()=>{
    test('should save to localStorage', () => {
        const KEY = 'foo', VALUE = 'bar';
        localStorage.setItem(KEY,VALUE)

        expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
        expect(localStorage.__STORE__[KEY]).toBe(VALUE);
        expect(Object.keys(localStorage.__STORE__).length).toBe(1);
      });
}) 