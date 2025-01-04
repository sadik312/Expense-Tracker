import React from "react";
import LoginButton from "../components/LoginButton";
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="page">
            <h1 className="heading">Expense Tracker</h1>

            <div className="intro">
                <h2>Track your spending</h2>
                <p>Expense Tracker is designed to help you keep track of your spending so you know where your money is going</p>
            </div>
            <div className="login-btn">
                <LoginButton />
            </div>
        </div>
    )
};

export default LandingPage;
