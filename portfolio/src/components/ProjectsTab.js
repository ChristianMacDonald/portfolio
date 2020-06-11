import React from 'react';
import ProjectCard from './ProjectCard';
import voicerThumbnail from '../voicer.PNG';
import mudThumbnail from '../mud.PNG';
import devDeskQueueThumbnail from '../devdeskqueue.PNG';
import howToThumbnail from '../how-to.PNG';
import guessWhoThumbnail from '../guess-who.PNG';
import './ProjectsTab.css';

const ProjectTab = props => {
    return (
        <div className="project-card-container">
            <ProjectCard title="Voicer" description="A marketplace for voiceover jobs." src={voicerThumbnail} projectLink="https://voicer-app.com/" />
            <ProjectCard title="How To" description="A website for posting how-tos." src={howToThumbnail} projectLink="https://howto-project.netlify.app/" />
            <ProjectCard title="Dev Desk Queue" description="An issue ticket software." src={devDeskQueueThumbnail} projectLink="https://friendly-mcclintock-7474f2.netlify.app/" />
            <ProjectCard title="MUD" description="A multi-user dungeon." src={mudThumbnail} projectLink="https://github.com/cspt5-team-h/backend" />
            <ProjectCard title="Guess Who" description="An API for a celebrity guessing game." src={guessWhoThumbnail} projectLink="https://github.com/guess-who-org/guess-who" />
        </div>
    );
};

export default ProjectTab;