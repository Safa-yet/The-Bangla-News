import SocialSide from "@/Component/NewsContaineerss/SocialSide";
import Categories from "@/Component/Shared Ui/Categories";
import NewsCard from "@/Component/Shared Ui/NewsCard";
import { getCategories } from "@/lib/ApiCalling";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";


const NewsContainer =async ({params}) => {

    const {id} = await params;
  
    const categories =await getCategories() ;
    
 
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
        const data = await res.json();
        const newsByCategories = data.data;




  return (
    <div className="container grid gird-cols-1 lg:grid-cols-4  mt-8">
      <div  className=" bg-white/5 p-3 sticky h-fit top-0">
        <h1 className="text-xl mb-4">All Catagroies</h1>
        <ul className="text-center space-y-3">
            {categories.map((item)=> <Categories item={item} id={id}   key={item.category_id}></Categories>)}
        </ul>
      </div>
      <div className="lg:col-span-2  p-3 space-y-3">
          <h1 className="text-xl mb-4">News By Catagory</h1>
          {
            newsByCategories.length >0 ? <div className="space-y-3"> {
            newsByCategories.map((news)=><NewsCard news={news} key={news._id}></NewsCard>)
        } </div> :<div className="h-[50vh] flex items-center justify-center"><h1>Category Is Empty</h1></div> 
          }
       
      </div>
      <SocialSide></SocialSide>
    </div>
  );
};

export default NewsContainer;
