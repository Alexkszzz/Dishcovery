import { useState, useEffect } from 'react';
import {
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { auth } from '../firebase-config';
import SignInSide from './Login/SignInSide';
import SignUp from './Signup/SignUp';
import Newsfeed from '../Feeds/Newsfeed';
import LeftSidebar from '../components/leftSideBar';
import RightSidebar from '../components/rightSideBar';
import Profile from '../components/profile';

export default function Authenticate() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    });

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignInSide />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Profile />} />
            </Routes>
        </Router>
    )

}