import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg, CardLink } from 'reactstrap';
import './ProjectCard.css';

const ProjectCard = props => {
    return (
        <Card className="project-card">
            <CardImg src={props.src} />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.description}</CardText>
                <CardLink href={props.projectLink}>See the project.</CardLink>
            </CardBody>
        </Card>
    );
};

export default ProjectCard;