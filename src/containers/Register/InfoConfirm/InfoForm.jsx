import React from 'react';
import { withFormik } from "formik"
import { vienameseRegex } from "../../../helpers/RegexHelper";
import { connect } from "react-redux";
import { changeUserInfo } from "../../../redux/actions/userAction"
const InfoForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues
    } = props;
    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        setValues({ ...values, file: URL.createObjectURL(event.target.files[0]) })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your fullname" name="fullname"
                onChange={handleChange} onBlur={handleBlur}
                className={errors.fullname && touched.fullname ? "error" : touched.fullname ? "success" : ""}

            />
            {errors.fullname && touched.fullname ? <div className="feedback">{errors.fullname}</div> :
                <div className="feedback-success"><span>1</span></div>}


            <div className="gender">
                <div className="gender-text">Select gender</div>
                <div className="gender-choices">
                    <div className="input-group">
                        <input className="gender-choice" type="radio" name="gender" id="male" value="male"
                            onChange={handleChange} />
                        <label htmlFor="male"><img src="./img/male.png" alt="gender" width="75px" /></label>
                    </div>
                    <div className="input-group">

                        <input className="gender-choice" type="radio" name="gender" id="female"
                            onChange={handleChange} value="female" />
                        <label htmlFor="female"><img src="./img/female.png" alt="gender" width="75px" /></label>
                    </div>

                </div>

            </div>
            <div className="profile-picture">
                <input type="file" id="file-input" name="file" onChange={handleFileChange} onBlur={handleBlur} />
                <label htmlFor="file-input">
                    <img src={!values.file ? "./img/avatar.png" : values.file} alt="" width="75px" style={{ maxHeight: "75px" }} />
                    <span>Upload profile picture</span>

                </label>

            </div>
            <div className="submit-line">
                <div className="error-line">
                    {errors.gender && touched.gender ? <div>{errors.gender}</div> : ""}
                    {errors.file && touched.file ? <div>{errors.file}</div> : ""}
                </div>
                <button type="submit" className="arrow-button" ><i className="fas fa-arrow-right" /></button>
            </div>

        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        changeUserInfo: (name, gender) => {
            dispatch(changeUserInfo(name, gender))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({ fullname: '', gender: "", file: null }),

    // Custom sync validation
    validate: values => {
        const error = {};
        if (!values.fullname) {
            error.fullname = "Please Enter your name"
        }
        else if (!vienameseRegex.test(values.fullname)) {
            error.fullname = "Only contains letters"
        }
        if (!values.gender) {
            error.gender = "Choose your gender"
        }
        if (!values.file) {
            error.file = "Choose your profile picture"
        }

        return error;
    },

    handleSubmit: (values, { props }) => {
        props.changeUserInfo(values.fullname, values.gender)
        props.history.push("/booking")
    },

    displayName: 'BasicForm',
})(InfoForm))