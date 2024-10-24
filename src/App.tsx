import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login';
import MainDisplay from './components/maindisplay';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (userLoggedIn) {
      // initialize chat
      // display all
    } else {
      /// something?
    }
  }, []);

  return (
    <>
      {(!userLoggedIn) 
      ? <Login setUserLoggedIn={setUserLoggedIn} />
      : <MainDisplay />
      }
    </>
  )
}

export default App
