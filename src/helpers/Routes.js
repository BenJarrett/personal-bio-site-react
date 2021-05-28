import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Projects from '../views/Projects';
import Bio from '../App/components/Bio';
import Contact from '../App/components/Contact';
import Home from '../App/components/Home';
import Technologies from '../App/components/Technologies';
// import Contact from '../components/Contact';
// import Home from '../components/Home';
// import Technologies from '../components/Technologies';

export default function Routes({
  admin,
  projects,
  setProjects,
  firebaseKey,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={Home}/>
        <Route
        exact path='/projects'
        admin={admin}
        component={() => <Projects
        projects={projects}
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
