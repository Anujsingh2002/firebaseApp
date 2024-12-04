import React, { useState } from 'react'
import SignInGoogle from './components/SignInGoogle'
import WelcomeScreen from './components/WelcomeScreen'

import { app } from './Firebase'
import { getAuth } from 'firebase/auth'

const auth = getAuth(app);
const App = () => {
  const [user, setUser] = useState(null);

  //title flickering
  let x=false;
  let elT=document.documentElement;
  let title=elT.querySelector('title')

  setInterval(() => {
    if (x==false) {
      title.innerText="React";
      x=true;
    } else {
      title.innerText="FirebaseApp";
      x=false;
    }
  }, 500);

  return (
    <>
      {
        user ?
          <WelcomeScreen auth={auth} user={user} setUser={setUser} />
          : <SignInGoogle auth={auth} setUser={setUser} />

      }
    </>
  )
}

export default App