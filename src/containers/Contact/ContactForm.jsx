import React from 'react';
import ArrowButton from '../../conponents/ArrowButton/ArrowButton';
import { withFormik } from "formik"
import {vienameseRegex} from '../../helpers/RegexHelper'

const ContactForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="left-side">
                <div className={`input-group ${errors.name && touched.name ? "error": touched.name ?"success" : ""}`}>
                    <label htmlFor="contact-name">Your Name: </label>
                    <input type="text" name="name" id="contact-name" placeholder="Enter Your name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.name && touched.name ? <div className="feedback">{errors.name}</div> :
                    <div className="feedback-success"><span>1</span></div>}

                
                <div className="input-group">
                    <label htmlFor="position">Select: </label>
                    <select name="position" id="position"
                        value={values.position}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="Rider">Rider</option>
                        <option value="Customer">Customer</option>

                    </select>

                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <div className="right-side">
                <div className="input-group message">
                    <label htmlFor="message">Message: </label>
                    <textarea type="text" name="message" id="message" placeholder="Message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.message && touched.message ? "error": touched.message ?"success" : ""}
                    ></textarea>
                </div>
                {errors.message && touched.message ? <div className="feedback">{errors.message}</div> :
                    <div className="feedback-success"><span>1</span></div>}

            </div>
            
            <ArrowButton />

        </form>
    )
}





export default withFormik({
    mapPropsToValues: () => ({ name: "", position: "Rider", message: "" }),

    validate: values => {
        const errors= {}
        if (!values.name) {
            errors.name = "Please Enter your name"
        }
        else if (!vienameseRegex.test(values.name)) {
            errors.name = "Only contains letters"
        }

        if (!values.message)
        {
            errors.message = "Please enter your message"
        }

        return errors
        
    },

    handleSubmit: (values, { props, setSubmitting }) => {
        console.log(values)
    },

    displayName: "contact-form"

})(ContactForm);