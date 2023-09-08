import React from 'react';

export const UserInfo = ({name,email}) => {
    return (
        <div>
            <p>User: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
};

