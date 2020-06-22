﻿import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        {
            users
                ? (
                    <div class="text-container">
                        <h3>Online Users</h3>
                        <div className="activeContainer">
                            <p>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </p>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default TextContainer;