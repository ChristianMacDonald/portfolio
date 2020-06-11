import React from 'react';
import AccountCard from './AccountCard';
import githubLogo from '../GitHub_Logo.png';
import linkedInLogo from '../LI-Logo.png';
import './AccountsTab.css';

const AccountsTab = props => {
    return (
        <div className="account-card-container">
            <AccountCard src={githubLogo} website="GitHub" accountLink="https://github.com/ChristianMacDonald"/>
            <AccountCard src={linkedInLogo} website="LinkedIn" accountLink="https://www.linkedin.com/in/christian-macdonald-a8a0a5184/"/>
        </div>
    );
}

export default AccountsTab;