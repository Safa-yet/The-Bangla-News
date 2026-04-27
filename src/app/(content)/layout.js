import Header from '@/Component/ForMain Content/Header';
import NewsContainer from "@/Component/ForMain Content/NewsContainer";
import TextAnimate from "@/Component/ForMain Content/TextAnimate";
import Navbar from "@/Component/Shared Ui/Navbar";
import React from 'react';


const MainLayout = ({children}) => {
    return (
        <div className='container mx-auto lg:space-y-5'>
            <Header></Header>
             <TextAnimate></TextAnimate>
                <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;