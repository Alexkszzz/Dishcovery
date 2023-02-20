import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "dishcovery-79595.firebaseapp.com",
    projectId: "dishcovery-79595",
    storageBucket: "dishcovery-79595.appspot.com",
    messagingSenderId: "773169923687",
    appId: "1:773169923687:web:e90b109bbe2506e69576c2",
    measurementId: "G-4P4FFZBP0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        console.log(name, email)
    }).catch((error) => {
        console.log(error);
    });
}