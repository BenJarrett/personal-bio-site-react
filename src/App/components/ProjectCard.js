import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  CardLink,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../../helpers/data/projectsData';
import ProjectsForm from './ProjectForm';

const ProjectsCard = ({
  firebaseKey,
  projects,
  setProjects,
  admin
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();
  console.warn(firebaseKey);
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteProject(fbKey)
          .then(setProjects);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('No Projects');
    }
  };
  const editView = (fbKey) => (
    <div>
      <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} onClick={() => handleClick(fbKey, 'delete')}>Delete Project</Button>
      <Button style={{ backgroundColor: '#70798C' }} onClick={() => handleClick(fbKey, 'edit')}>
        {editing ? 'Close Form' : 'Edit Project'}
      </Button>
    </div>
  );
  return (
    projects.map((projectInfo) => (
        <Card
        key={projectInfo.firebaseKey}>
          <CardBody>
         <CardTitle tag="h5">Project Name: {projectInfo.title}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Technologies Used: {projectInfo.technologiesUsed}</CardSubtitle>
         </CardBody>
         <img width="100%" src={projectInfo.screenshot} className="photo" alt="Card image cap" />
         <CardBody>
         <CardLink className="url-style" target="_blank" href={projectInfo.url}>View Project</CardLink>
         { admin && editView(projectInfo.firebaseKey) }
         {
         editing && <ProjectsForm
         formTitle='Edit Project'
         setProjects={setProjects}
         firebaseKey={projectInfo.firebaseKey}
         githubUrl={projectInfo.githubUrl}
         screenshot={projectInfo.screenshot}
         technologiesUsed={projectInfo.technologiesUsed}
         title={projectInfo.title}
         url={projectInfo.url}
         />
         }
         </CardBody>
         </Card>
    ))
  );
};

ProjectsCard.propTypes = {
  firebaseKey: PropTypes.string,
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
export default ProjectsCard;
