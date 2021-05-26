import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../App/components/ProjectCard';

function Projects({
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
    <>
    <h2> Projects </h2>
      <div className="card-container">
          <ProjectCard
            firebaseKey={firebaseKey}
            githubUrl={githubUrl}
            screenshot={screenshot}
            technologiesUsed={technologiesUsed}
            title={title}
            url={url}
            projects={projects}
            admin={admin}
            setProjects={setProjects}
          />
      </div>
    </>
  );
}

Projects.propTypes = {
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

export default Projects;
