import React from 'react';

const page = async({params}) => {

    const {id} =await params;
            const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
        const data = await res.json();
        const newsByCategories = data.data;
    return (
        <div>
            afd
        </div>
    );
};

export default page;