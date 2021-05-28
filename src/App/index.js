import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { getProjects } from '../helpers/data/projectsData';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';

function App() {
  const [admin, setAdmin] = useState(null);
  const [projects, setProjects] = useState([]);
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
  console.warn(admin);
  return (
    <>
      <div id="nav-styles">
        <NavBar admin={admin} />
      </div>
      <Routes
      admin={admin}
      projects={projects}
      setProjects={setProjects}
      />
    </>
  );
}
export default App;
