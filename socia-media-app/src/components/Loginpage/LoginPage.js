
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import './LoginPage.css'


const firebaseConfig = {
    apiKey: "AIzaSyAO6dgui6n-9yKENg5Po0h690S_GiMJHXE",
    authDomain: "social-media-feed-8777d.firebaseapp.com",
    projectId: "social-media-feed-8777d",
    storageBucket: "social-media-feed-8777d.firebasestorage.app",
    messagingSenderId: "34462473088",
    appId: "1:34462473088:web:0230ac50ba1e045e693f65",
    measurementId: "G-J0KQZ26K0R"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

const LoginPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User logged in:', result.user);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  
  return (

    <div className="app">
    {!user ? (
      <div className="login-screen">
        <div className="login-container">
          <img
            src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733989059/Group_1171276169_gyxpaw.png"
            alt="Group"
            className="group-image"
          />
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733989110/2de875e6142d3dde26f7cea380c77837_1_jopdr5.png"
              alt="Logo"
              className="logo-image"
            />
            <h1 className="app-title">Vibesnap</h1>
            <p className="app-tagline">Moments That Matter, Shared Forever.</p>
          </div>
          <div className="google-button-wrapper">
          <button onClick={handleGoogleLogin} className="google-login-button"> 
          <img
                src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733989848/Group_1171276158_lztgfl.png"
                alt="Google Logo"
                className="google-logo"
              />
            Continue with Google
          </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="feed-screen">
        <h2>Welcome Back, {user.displayName}!</h2>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="Profile" className="profile-picture" />
        <button onClick={() => auth.signOut()} className="logout-button">
          Logout
        </button>
      </div>
    )}
  </div>
    
    
  );
};

export default LoginPage;
