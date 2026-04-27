



import Header from '@/Component/ForMain Content/Header';
import Navbar from '@/Component/Shared Ui/Navbar';
import React from 'react';

const AuthenticationLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {
                children
            }
            
        </div>
    );
};

export default AuthenticationLayout;