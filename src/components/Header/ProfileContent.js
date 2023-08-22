import React from 'react';
import '../../App.css'
import { Link } from "react-router-dom";

export default function ProfileContent() {

    return (
        <>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-details">
                        <span className="avatar">gm</span>
                        <span className='name'>Gulzar Mammadova</span>
                    </div>
                    <div className="profile-menu">
                        <Link className='manage-acc-btn' to="/manage-account">Manage your Account</Link>
                        <Link className='sign-out' to="/login">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            Sign out</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
