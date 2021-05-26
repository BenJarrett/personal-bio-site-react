import React, { useState } from 'react';

import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

// import { deletePlayer } from '../../helpers/data/playerData';
// import PlayerForm from './PlayerForm';

const ProjectCard = ({
  // firebaseKey,
  projects,
  // setProjects,
  // admin

}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      // case 'delete':
      //   deletePlayer(firebaseKey)
      //     .then(setPlayers);
      //   break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    projects.map((projectInfo) => (
  <Card key={projectInfo.firebaseKey}>
      <CardTitle tag="h5">{projectInfo.title}</CardTitle>
      <CardText>githubUrl: {projectInfo.githubUrl}</CardText>
      <CardText>screenshot: {projectInfo.screenshot}</CardText>
      <CardText>technologiesUsed: {projectInfo.technologiesUsed}</CardText>
      <CardText>url: {projectInfo.url}</CardText>
      <CardText></CardText>
      <img style={{ width: '14rem', alignSelf: 'center', height: '18rem' }} src={projectInfo.screenshot} className="photo" alt="Card image cap" />
      <Button style={{ backgroundColor: '#D8E1FF', color: '#000000', margin: '1rem' }} onClick={() => handleClick('delete')}></Button>
      <Button style={{ backgroundColor: '#D8E1FF', color: '#000000', margin: '1rem' }}onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Player'}
      </Button>
    </Card>
    ))
  );
};

ProjectCard.propTypes = {
  // firebaseKey: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  setProjects: PropTypes.func
};

export default ProjectCard;
