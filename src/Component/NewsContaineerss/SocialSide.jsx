"use client"
import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();

import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import React from 'react';

const SocialSide = () => {
  
const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

    return (
        <div className='p-3'>
            <div>
                <h1 className='mb-3 text-lg'>Social Link</h1>
                <div className="flex w-full max-w-xs flex-col gap-3">
      <Button className="w-full text-black" variant="tertiary" onClick={signIn} >
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      <Button className="w-full text-black" variant="tertiary">
        <Icon icon="mdi:github" />
        Sign in with GitHub
      </Button>
      <Button className="w-full text-black" variant="tertiary">
        <Icon icon="ion:logo-apple" />
        Sign in with Apple
      </Button>
    </div>
            </div>
        </div>
    );
};

export default SocialSide;