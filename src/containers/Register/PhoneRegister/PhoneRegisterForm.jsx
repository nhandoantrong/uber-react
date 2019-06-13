import React from 'react';
import { withFormik } from 'formik';
import { numberRegex } from "../../../helpers/RegexHelper"
const MyForm = props => {
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
      <div className="phone-number">
        <label htmlFor="phone">+84</label>
        <div className="input-group">
          <input type="text" name="phone" id="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            className={errors.phone && touched.phone ? "error" : touched.phone ? "success" : ""} />
          {errors.phone && touched.phone ? <div className="feedback">{errors.phone}</div> :
            <div className="feedback-success"><span>1</span></div>}

        </div>


      </div>
      <div className="term-agreement">
        <label className="container">
          <input type="checkbox" name="agree" id="agree" checked={values.agree} onChange={handleChange} />
          <span className="checkmark" />
        </label>
        <label htmlFor="agree">Agree Terms and conditions</label>

      </div>



      <div className="submit-line">
        <div className="notice">
          {errors.agree && touched.agree ? <div className="feedback">{errors.agree}</div> :
            <div className="feedback-success"><span>1</span></div>}
        </div>
        
        <div className="arrow">
          <button type="submit" ><i className="fas fa-arrow-right" /></button>
        </div>

      </div>

    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ phone: '', agree: false }),

  // Custom sync validation
  validate: values => {
    const errors = {};
    if (!values.phone) {
      errors.phone = 'Phone number should not be empty';
    }
    else if (values.phone.length < 7) {
      errors.phone = "Contains at least 7 digits"
    }
    else if (!numberRegex.test(values.phone)) {
      errors.phone = "Contains only numbers"

    }
    if (!values.agree) {
      errors.agree = "You must agree with the term"
    }
    return errors;
  },

  handleSubmit: (values, { props,setSubmitting }) => {
      props.setPhoneNumber(values.phone);
  },

  displayName: 'BasicForm',
})(MyForm);