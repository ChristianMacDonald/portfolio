import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, CardText, Fade } from 'reactstrap';
import ProjectsTab from './ProjectsTab';
import classNames from 'classnames';
import './Tabs.css';
import AccountsTab from './AccountsTab';

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab != tab) setActiveTab(tab);
    };

    return (
        <div>
            <Nav tabs>
                <NavLink className={classNames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>About Me</NavLink>
                <NavLink className={classNames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Projects</NavLink>
                <NavLink className={classNames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>Accounts</NavLink>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Fade in={activeTab === '1'}>
                        <p id="about-me">
                            I'm a full stack web developer, a gamer, and a lover of learning. Unfortunately I'm not good enough at video games to make a
                            living off of it, but thankfully I'm a great programmer.
                        </p>
                    </Fade>
                </TabPane>
                <TabPane tabId="2">
                    <Fade in={activeTab === '2'}>
                        <ProjectsTab />
                    </Fade>
                </TabPane>
                <TabPane tabId="3">
                    <Fade in={activeTab === '3'}>
                        <AccountsTab />
                    </Fade>
                </TabPane>
            </TabContent>
        </div>
    );
};

export default Tabs;