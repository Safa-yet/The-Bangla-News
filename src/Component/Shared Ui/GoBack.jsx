"use client"
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoBack = () => {
    const router = useRouter();
    return (
        <Button variant='goast' className='my-4 rounded-lg' onClick={()=>router.back()}>Back to Categories</Button>
    );
};

export default GoBack;