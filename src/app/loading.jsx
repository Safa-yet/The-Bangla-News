import { Spinner } from '@heroui/react';
import React from 'react';

const WindowLoading = () => {
    return (
       <div className="flex flex-col items-center gap-2 h-screen justify-center">
        <Spinner size="xl" />
      </div>
    );
};

export default WindowLoading;