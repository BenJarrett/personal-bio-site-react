import React from 'react';
// import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed) {
  //       const userObj = {
  //         fullName: authed.displayName,
  //         profileImage: authed.photoURL,
  //         uid: authed.uid,
  //         user: authed.email.split('@')[0]
  //       };
  //       setUser(userObj);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  // }, []);

  return (
    <div className='App'>
      <Router>
        <Routes/>
        <NavBar/>
      </Router>
    </div>
  );
}

export default App;
