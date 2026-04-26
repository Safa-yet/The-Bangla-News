"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href,children}) => {
    const pathName =usePathname();
    const isMatch = pathName === href;
    // console.log(isMatch);
    return (
        
<Link href={href} className={`${isMatch ? "font-semibold" : "text-white/50"} ` } >{children}</Link>
    );
};

export default NavLinks;