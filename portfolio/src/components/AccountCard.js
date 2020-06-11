import React from 'react';
import { Card, CardImg } from 'reactstrap';
import './AccountCard.css';

const AccountCard = props => {
    return (
        <Card className="account-card">
            <a href={props.accountLink}>
                <CardImg className="account-img" src={props.src} />
            </a>
        </Card>
    );
};

export default AccountCard;