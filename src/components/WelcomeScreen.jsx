import React from 'react'
import { signOut } from 'firebase/auth'
const WelcomeScreen = ({ auth ,user, setUser }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("SignOut failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <h1 className="text-4xl font-bold">Welcome {user.name}!</h1>
      <img
        src= {user.photoURL}
        alt="Profile Pic Loading..."
        className="w-24 h-24 rounded-full mt-6 hover:scale-105 transition-all duration-500"
      />
      <p className="text-lg mt-4 font-semibold">Email: {user.email}</p>
      <button
        onClick={handleSignOut}
        className="mt-8 px-6 py-3 text-white bg-red-500 rounded-full hover:bg-red-600 hover:scale-105 transition-all duration-500"
      >
        SignOut
      </button>
    </div>
  );
};

export default WelcomeScreen;
