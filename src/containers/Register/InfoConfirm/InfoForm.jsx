import React from 'react';

const InfoForm = props => {
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
            <input type="text" placeholder="Enter your fullname" />

            <div className="gender">
                <div className="gender-text">Select gender</div>
                <div className="gender-choices">
                    <div className="input-group">
                        <input className="gender-choice" type="radio" name="gender" id="male" />
                        <label htmlFor="male"><img src="./img/male.png" alt="gender" width="75px" /></label>
                    </div>
                    <div className="input-group">

                        <input className="gender-choice" type="radio" name="gender" id="female" />
                        <label htmlFor="female"><img src="./img/female.png" alt="gender" width="75px" /></label>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default InfoForm;