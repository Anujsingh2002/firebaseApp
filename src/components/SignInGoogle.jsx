import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { FaGoogle } from "react-icons/fa";

const googleProvider =new GoogleAuthProvider();

const SignInGoogle = ({auth, setUser }) => {

  const handleSignin = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      // console.log(result);
      const user = res.user;
      setUser({ name: user.displayName, email: user.email, photoURL: user.photoURL });
    } catch (error) {
      console.error("SignIn failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <h1 className="text-4xl font-bold mb-8">Firebase App</h1>
      <button
        onClick={handleSignin}
        className="flex gap-2 px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-500 "
      >
        <div>Sign in with Google </div><div className='pt-1 text-red-500'> <FaGoogle /></div>
      </button>
    </div>
  );
};

export default SignInGoogle