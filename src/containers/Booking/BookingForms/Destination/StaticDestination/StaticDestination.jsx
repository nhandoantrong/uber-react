import React from 'react';

const StaticDestination = () => {
    return (
        <div className="static-destination">
            <div className="familiar-places">
                <div className="familiar-place-item">
                    <div className="icon">
                        <div className="icon-container">
                            <i className="fas fa-suitcase"></i>

                        </div>
                    </div>
                    <div className="content">
                        <h3>Office</h3>
                        <p>BDlive24,Road 8 Niketon, gulshan, 1000</p>
                    </div>
                </div>
                <div className="familiar-place-item">
                    <div className="icon">
                        <div className="icon-container">
                            <i className="fas fa-home"></i>

                        </div>
                    </div>
                    <div className="content">
                        <h3>Home</h3>
                        <p>BDlive24,Road 8 Niketon, gulshan, 1000</p>
                    </div>
                </div>
            </div>

            <div className="nearby">
                <h2>Nearby Restaurants</h2>
                <div className="img-group">
                    <div className="res-image img1">
                        <div className="curtain"></div>
                        <div className="res-info">
                            <h3>Grandiose Restaurant</h3>
                            <p>Airport Road Khilkhet,1229</p>
                        </div>

                    </div>
                    <div className="res-image img2"></div>

                </div>
            </div>


            <div className="friend">
                <h2>Friend nearby you</h2>
                <div className="friend-list">
                    <div className="friend-item">
                        <img src="./img/ava1.jpg" alt="" />
                        <h3>Smirk</h3>
                        <p>Dhanmondi 32</p>
                        <div className="check">
                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="./img/ava2.jpg" alt="" />
                        <h3>Rayhan</h3>
                        <p>Dhanmondi 32</p>
                        <div className="check">
                            <i className="fas fa-check"></i>

                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="./img/ava3.jpg" alt="" />
                        <h3>Farhana</h3>
                        <p>Dhanmondi 32</p>
                        <div className="check">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticDestination;