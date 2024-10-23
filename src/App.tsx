import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/login';
import MainDisplay from './components/maindisplay';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

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
      ? <Login />
      : <MainDisplay />
      }
    </>
  )
}

export default App
