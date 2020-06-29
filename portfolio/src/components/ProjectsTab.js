import React from 'react';
import ProjectCard from './ProjectCard';
import voicerThumbnail from '../voicer.PNG';
import mudThumbnail from '../mud.PNG';
import devDeskQueueThumbnail from '../devdeskqueue.PNG';
import howToThumbnail from '../how-to.PNG';
import guessWhoThumbnail from '../guess-who.PNG';
import './ProjectsTab.css';

const voicerTechStack = [
    'React',
    'Less',
    'Node',
    'Express',
    'Knex',
    'PostgreSQL'
]

const voicerBullets = [
    'Used React to build the user interface',
    'Used Less to style the user interface',
    'Used Express to build the API web server',
    'Used Knex to build the database for the API'
]

const howToTechStack = [
    'React',
    'Less',
    'Node',
    'Express',
    'Knex',
    'SQLite'
]

const howToBullets = [
    'Used React to build the user interface',
    'Used Less to style the user interface',
    'Used Express to build the API web server',
    'Used Knex to build the database for the API'
]

const devDeskQueueTechStack = [
    'HTML',
    'CSS',
    'Javascript'
]

const devDeskQueueBullets = [
    'Used HTML to build the user interface',
    'Used CSS to style the user interface',
    'Used Javascript to create functionality for the user interface'
]

const mudTechStack = [
    'React',
    'Django',
    'PostgreSQL'
]

const mudBullets = ['Used Django to build the database and API']

const guessWhoTechStack = [
    'Node',
    'Express',
    'Knex',
    'SQLite'
]

const guessWhoBullets = [
    'Used Express to build the API web server',
    'Used Knex to build the database for the API'
]

const ProjectTab = props => {
    return (
        <div className="project-card-container">
            <ProjectCard
                title="Voicer"
                description="A marketplace for voiceover jobs."
                techStack={voicerTechStack}
                src={voicerThumbnail}
                projectLink="https://voicer-app.com/"
                bullets={voicerBullets}
            />

            <ProjectCard
                title="How To"
                description="A website for posting how-tos."
                techStack={howToTechStack}
                src={howToThumbnail}
                projectLink="https://howto-project.netlify.app/"
                bullets={howToBullets}
            />

            <ProjectCard
                title="Dev Desk Queue"
                description="An issue ticket software."
                techStack={devDeskQueueTechStack}
                src={devDeskQueueThumbnail}
                projectLink="https://friendly-mcclintock-7474f2.netlify.app/"
                bullets={devDeskQueueBullets}
            />

            <ProjectCard
                title="MUD"
                description="A multi-user dungeon."
                techStack={mudTechStack}
                src={mudThumbnail}
                projectLink="https://github.com/cspt5-team-h/backend"
                bullets={mudBullets}
            />

            <ProjectCard
                title="Guess Who"
                description="An API for a celebrity guessing game."
                techStack={guessWhoTechStack}
                src={guessWhoThumbnail}
                projectLink="https://github.com/guess-who-org/guess-who"
                bullets={guessWhoBullets}
            />
        </div>
    );
};

export default ProjectTab;