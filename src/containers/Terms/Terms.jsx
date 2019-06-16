import React from 'react';
import './Terms.scss'
const Terms = () => {
    return (
        <div className="terms-page">
            <div className="liar" style={{ height: "50px" }} ></div>
            <div className="content">
                <h1>At Uber we care about you <br /> & the trust you give us</h1>
                <p className="intro">Uber puts transportation at your fingertips. Understanding how and why we use your information should be just as easy. Our Privacy Policy and Privacy FAQs provide the latest information about the data we collect and how
                we use it. We also want you to know a few more things about our approach to privacy:</p>
                <div className="term">
                    <h3>Your data works for you</h3>
                    <p>We use your data to provide convenient transportation and delivery options, to help drivers maximize their earnings, and to protect the safety and security of our users. And we don’t rent or sell your data -- to anyone.</p>
                </div>
                <div className="term">
                    <h3>Safety first</h3>
                    <p>Your data enables us to determine the safest pick-ups and drop-offs, deter unsafe driving habits, help you avoid accident-prone roads, and to develop new features to get where you’re going, safe and sound.</p>
                </div>
                <div className="term">
                    <h3>You are in control</h3>
                    <p>Through the settings in the Uber app or on your device, you can choose when to share your location, sync your contacts and calendar, personalize your app, and even delete your account.</p>
                </div>
            </div>

        </div>
    );
};

export default Terms;