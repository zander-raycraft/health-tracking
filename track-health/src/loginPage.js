import React, { useEffect } from "react";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';

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
            <div>LoginGoogle</div>
            <div className="firebase-auth-container"></div>
        </>
    )
}

export default LoginGoogle