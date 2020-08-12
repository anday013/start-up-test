import React from 'react'
import './UserCard.css'
import { Status, Application } from '../../entities/constants'
interface UserCardProps {
    name: string,
    status: Status,
    time: string,
    application: Application
}

const UserCard: React.FC<UserCardProps> = props => {
    const { name, status, time } = props;
    return (
        <div className="user-card-wrapper">
            <div className="card-image">
                <img src={require("../../assets/profile.jpg")} alt="profile" />
            </div>
            <div className="card-details">
                <div style={{display: 'flex'}}>
                    <h2>{name}</h2>
                    <img src={require('../../assets/docs.png')} alt="docs" />
                </div>
                <p className="status">{status}</p>
                <p className="time">{time}</p>
            </div>
        </div>
    )
}


export default UserCard; 