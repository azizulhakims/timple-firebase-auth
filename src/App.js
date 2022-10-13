import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from './firebase/firebase.init';


const auth = getAuth(app);

function App() {

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)

      .then(result => {
        const user = result.user;
        console.log(user);
      })

      .catch(error => {
        console.log('error', error);
      })
  }


  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sing In</button>
    </div>
  );
}

export default App;
