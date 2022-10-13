import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';


const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)

      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })

      .catch(error => {
        console.log('error', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        user.uid ?
          <button onClick={handleSignOut}>Sign out</button>
          :
          < button onClick={handleGoogleSignIn}>Google Sing In</button>
      }
      {
        user.uid && <div>
          <h3>Name : {user.displayName}</h3>
          <p>Email : {user.email} </p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div >

  );
}

export default App;
