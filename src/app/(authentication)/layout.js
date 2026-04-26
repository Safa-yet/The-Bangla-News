import React from 'react';

const AuthenticationLayout = ({children}) => {
    return (
        <div>
            <h1>This is For Authenticatiom</h1>
            {
                children
            }
            
        </div>
    );
};

export default AuthenticationLayout;