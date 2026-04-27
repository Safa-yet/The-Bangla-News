import { redirect } from 'next/navigation';
import React from 'react';
const id = "01";
const Home =async () => {
  return (
  redirect(`/category/${id}`)
  );
};

export default Home;