import React from 'react';
import PropTypes from 'prop-types';
import ProjectsForm from '../App/components/ProjectForm';

function AddProject({ setProjects }) {
  return (
    <>
      <ProjectsForm setProjects={setProjects}/>
    </>
  );
}

AddProject.propTypes = {
  setProjects: PropTypes.func
};

export default AddProject;
