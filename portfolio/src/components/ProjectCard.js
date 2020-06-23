import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg, CardLink, ListGroup, ListGroupItem } from 'reactstrap';
import './ProjectCard.css';

const ProjectCard = props => {
    return (
        <Card className="project-card">
            <CardImg src={props.src} />
            <CardBody>
                <a href={props.projectLink}><CardTitle>{props.title}</CardTitle></a>
                <CardText>{props.description}</CardText>
                <CardText className="tech-stack">{props.techStack.map((e, i) => `${i != 0 ? ' | ' : ''} ${e}`)}</CardText>
                <ListGroup>
                    {props.bullets.map(bullet => <ListGroupItem>{bullet}</ListGroupItem>)}
                </ListGroup>
            </CardBody>
        </Card>
    );
};

export default ProjectCard;