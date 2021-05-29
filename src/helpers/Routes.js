import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Projects from '../views/Projects';
import Bio from '../App/components/Bio';
import Contact from '../App/components/Contact';
import Technologies from '../App/components/Technologies';
import HomePage from '../views/Home';
import AddProject from '../views/AddProject';
// import Contact from '../components/Contact';
// import Home from '../components/Home';
// import Technologies from '../components/Technologies';

export default function Routes({
  projects,
  setProjects,
  firebaseKey,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
  admin
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={() => <HomePage admin={admin}
        />} />
        <Route
        exact path='/projects'
        component={() => <Projects
        projects={projects}
        admin={admin}
        setProjects={setProjects}
        firebaseKey={firebaseKey}
        githubUrl={githubUrl}
        screenshot={screenshot}
        technologiesUsed={technologiesUsed}
        title={title}
        url={url}
        />}

        />
         <Route
        exact path='/bio'
        component={Bio}
        />
         <Route
        exact path='/technologies'
        component={Technologies}
        />
        <Route
        exact path='/contact'
        component={Contact}
        />
        <Route exact path='/add-project' component={() => <AddProject
        setProjects={setProjects}
        firebaseKey={firebaseKey}
        screenshot={screenshot}
        title={title}
        technologiesUsed={technologiesUsed}
        url={url}
        admin={admin}
        githubUrl={githubUrl}
        projects={projects}/>}
      />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  firebaseKey: PropTypes.string,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  admin: PropTypes.any
};
