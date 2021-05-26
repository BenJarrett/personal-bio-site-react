import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import getProjects from '../helpers/data/projects';

function App() {
  const [projects, setProjects] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        getProjects().then((projectsArray) => setProjects(projectsArray));
      } else if (admin || admin === null) {
        setAdmin(false);
        getProjects().then((projectsArray) => setProjects(projectsArray));
      }
    });
  }, []);
  return (
    <div className='App'>
      <Router>
        <NavBar
        admin={admin}
        />
        <Routes
        admin={admin}
        projects={projects}
        setProjects={setProjects}
        />
      </Router>
    </div>
  );
}

export default App;
