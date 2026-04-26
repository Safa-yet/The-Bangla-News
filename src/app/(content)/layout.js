import Header from '@/Component/ForMain Content/Header';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
};

export default MainLayout;