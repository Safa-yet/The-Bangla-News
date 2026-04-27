'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';




const SignUpPage = () => {
    const SignUpHandle =async (e)=>{
         e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formObject = Object.fromEntries(formData.entries());

    const {name,email,password,image} = formObject;

    const { data, error } = await authClient.signUp.email({
    name:name , // required
    email: email , // required
    password: password , // required
    image: image
});



    }
    return (
        <>
        <div className='flex items-center justify-center h-[80vh]'>
            
         <Form className="flex w-96 flex-col gap-4 bg-white/5 p-8 rounded-lg" onSubmit={SignUpHandle}>
         <Label className='text-center text-2xl mb-4'>SignUp Form</Label>
      <TextField
        isRequired
        name="name"
        type="text"
       
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        
        name="image"
        type='url'
      >
        <Label>Upload Profile URL</Label>
        <Input  />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

       <Button type="submit" className="w-full rounded-xl">
          Sign Up
        </Button>
    </Form>
        </div>
        </>
    );
};

export default SignUpPage;