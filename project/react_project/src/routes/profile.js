import React from 'react';
import {Redirect} from 'react-router-dom';
import '../App.css';
import {useDispatch} from 'react-redux';
import Cookies from 'js-cookie';
import {logout} from '../actions/index';

function Profile() {
    const dispatch = useDispatch();
    const logoutEvent = () => {
        Cookies.remove("usernameid");
        dispatch(logout());
        return <Redirect to="/"/>;
    }

    return (
        <div className="floater">
        <div className="center">
            <p className="LogoutButton" onClick={logoutEvent}>Logout</p>
        </div>
        </div>
    )

}

export default Profile;