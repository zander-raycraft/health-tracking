import React, { useEffect } from "react";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom';

const LoginGoogle = (props) => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance()|| new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('.firebase-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false
                }
            ],
            signInSuccessURL: '/authenticated',
            privacyPolicyURL: '<your-url>'
        });
    }, []);
    return (
        <>
            <div className="login-window">
                <div className="firebase-auth-container"></div>
                <p className="register-link">Don't have an account yet? <Link to="/register">Register Now</Link></p>
            </div>
        </>
    )
}

export default LoginGoogle