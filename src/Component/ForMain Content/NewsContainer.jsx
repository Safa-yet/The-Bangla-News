import { getCategories } from "@/lib/ApiCalling";
import Link from "next/link";
import React from "react";
import NewsCard from "../Shared Ui/NewsCard";

const NewsContainer =async () => {
  
    const categories =await getCategories() ;
    
 
        const res = await fetch('https://openapi.programming-hero.com/api/news/category/04');
        const data = await res.json();
        const newsByCategories = data.data;

        console.log(newsByCategories);
  return (
    <div className="grid grid-cols-4  mt-8">
      <div  className=" bg-white/15 p-3 sticky h-fit top-0">
        <h1 className="text-xl mb-4">All Catagroies</h1>
        <ul className="text-center space-y-2">
            {categories.map((item)=> <li  className=" bg-black" key={item.category_id}><Link className="py-1 block" href={`/category/${item.category_id}`}>{item.category_name}</Link></li>)}
        </ul>
      </div>
      <div className="col-span-2  p-3 space-y-3">
          <h1 className="text-xl mb-4">News By Catagory</h1>
        {
            newsByCategories.map((news)=><NewsCard news={news} key={news._id}></NewsCard>)
        }
      </div>
      <div>social</div>
    </div>
  );
};

export default NewsContainer;
