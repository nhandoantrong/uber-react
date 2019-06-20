import React from 'react';
import {connect} from "react-redux"

export const Headers = props => {
    const name = props.user.name;
    const gender= props.user.gender;

    return (
        <header className="header">
            <div className="logo">
                <img src="./img/logo_img.png" alt="uber-logo" />
                <img src="./img/logo_text.png" alt="uber-logo" />
            </div>
            <div className="collapse">
                {name ?
                 <div className="name">
                     <h3>{name}</h3>
                     <p>4.89 <i className="fas fa-star"></i></p>
                 </div>
                 :""
                }
                {
                    gender?  <img src={`./img/${gender}.png` }alt=""/> :""
                }
                <i className="fas fa-bars" />
            </div>
        </header>
    );
};

const mapStateToProps  = state =>({
    user:state.user
})

export default connect(mapStateToProps)(Headers);