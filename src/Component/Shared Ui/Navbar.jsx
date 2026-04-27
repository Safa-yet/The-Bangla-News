"use client";

import { Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";
import { signOut } from "better-auth/api";
import Image from "next/image";

const Navbar = () => {
  const { data: session,isPending } = authClient.useSession();

  const userInfo = session?.user;

  // const { name, image } = userInfo;

  // console.log(userInfo);

  return (
    <div className=" container mx-auto flex items-center justify-between my-4">
      <details className="dropdown md:hidden">
  <summary className=" m-1"></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
     <NavLinks href={"/"}>Home</NavLinks>
        <NavLinks href={"/about"}>About</NavLinks>
        <NavLinks href={"/career"}>Career</NavLinks>
  </ul>
</details>
      <ul className=" gap-4 hidden md:flex">
        <NavLinks href={"/"}>Home</NavLinks>
        <NavLinks href={"/about"}>About</NavLinks>
        <NavLinks href={"/career"}>Career</NavLinks>
      </ul>
      <div className="flex  items-center gap-2.5 justify-between">
        {
          isPending? <> <Spinner size="lg" /></> :<>
          {userInfo ? (
          <>
            <h1 className="inline">Hello, {userInfo.name}</h1>
             <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image width={20} height={20}
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={async () => await authClient.signOut()}><a>Logout</a></li>
      </ul>
    </div>
          </>
        ) : (
          <>
            <Link href="/signin">
              <Button variant="secondary" className=" rounded-sm ">
                Login
              </Button>
            </Link>
          </>
        )}
          </>
          
        }
        
      </div>
    </div>
  );
};

export default Navbar;
