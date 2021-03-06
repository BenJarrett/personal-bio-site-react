import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { addProject, updateProject } from '../../helpers/data/projectsData';

const ProjectsForm = ({
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
  firebaseKey,
  setProjects,

}) => {
  const [project, setProject] = useState({
    githubUrl: githubUrl || '',
    screenshot: screenshot || '',
    technologiesUsed: technologiesUsed || '',
    title: title || '',
    url: url || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectArray) => setProjects(projectArray));
    } else {
      addProject(project).then((projectArray) => setProjects(projectArray));
    }
  };

  return (
    <div className='pForm'>
    <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Project Form: </h2>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            name='title'
            id='title'
            value={project.title}
            type='text'
            placeholder='Enter a Project Title'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="screenshot">Screenshot:</Label>
          <Input
            name='screenshot'
            id='screenshot'
            value={project.screenshot}
            type='url'
            placeholder='Enter a Screenshot URL'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="technologiesUsed">Technologies Used:</Label>
          <Input
            name='technologiesUsed'
            id='technologiesUsed'
            value={project.technologiesUsed}
            type='text'
            placeholder='Enter Technologies Used'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="url">Project URL:</Label>
          <Input
            name='url'
            id='url'
            value={project.url}
            type='url'
            placeholder='Enter url'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

ProjectsForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  firebaseKey: PropTypes.string,
  setProjects: PropTypes.string
};

export default ProjectsForm;
