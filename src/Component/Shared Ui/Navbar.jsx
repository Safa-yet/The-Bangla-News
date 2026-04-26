import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className=" container mx-auto flex items-center">
      <ul className="flex w-full gap-4">
      <NavLinks href={'/'}>Home</NavLinks>
      <NavLinks href={'/about'}>About</NavLinks>
      <NavLinks href={'/career'}>Career</NavLinks>

      </ul>
      <div className="flex  items-center gap-2.5">
        <Avatar>
          <Avatar.Image
            alt="Blue"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
          />
          <Avatar.Fallback>B</Avatar.Fallback>
        </Avatar>
        <Button variant="secondary" className=' rounded-sm '>Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
