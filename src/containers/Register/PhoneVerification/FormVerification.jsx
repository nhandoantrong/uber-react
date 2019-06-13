import React from 'react';
import { withFormik, FieldArray } from "formik";
import { numberRegex } from "../../../helpers/RegexHelper"

const FormVerification = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const handleOnChange = (event) =>{
        if (event.target.value.length >0)
        {
            event.target.value= event.target.value[0];
        }
        handleChange(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <FieldArray
                name="securityNumber"
                render={arrayHelpers => (
                    <div>
                        {values.securityNumber.map((number, index) => (
                            <input name={`securityNumber.${index}`} key={index}
                                value={values.securityNumber[index]}
                                onChange={handleOnChange}
                                onBlur={handleBlur}
                                className={errors.securityNumber && touched.securityNumber && errors.securityNumber[index] && touched.securityNumber[index] ? "error" :
                                    touched.securityNumber && touched.securityNumber[index] ? "success" : ""} />
                        ))}
                    </div>
                )}
            />

            <div className="confirmation">
                <p className="reconfirm">I didn't recieve code</p>
                <button className="arrow-button" type="submit"><i className="fas fa-arrow-right"></i></button>
            </div>
        </form>

    )
}

export default withFormik({
    mapPropsToValues: () => ({ securityNumber: ["", "", "", ""] }),
    validate: values => {
        const error = {};
        
        error.securityNumber = [];
        for (let index in values.securityNumber) {
            if (values.securityNumber[index] === "" || !numberRegex.test(values.securityNumber[index]))
                error.securityNumber[index] = true;
            else
                error.securityNumber[index] = false;
        }
        if (error.securityNumber.indexOf(true) === -1)
            return {};
        return error;
    },
    handleSubmit: (values, {props, setSubmitting }) => {
        props.changeToInfoConfirm();
    },
    displayName: "Verification Number"
})(FormVerification)