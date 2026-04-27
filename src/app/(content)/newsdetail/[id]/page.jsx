import { monsieur } from "@/Component/ForMain Content/Header";
import SocialSide from "@/Component/NewsContaineerss/SocialSide";
import GoBack from "@/Component/Shared Ui/GoBack";
import { Button } from "@heroui/react";
import Image from "next/image";

import React from "react";


export const metadata = {
    title: "দ্যা বাংলা - Details",
    description: "Bangladeshi Daily Update news",
  };

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const data = await res.json();
  const newsData = data.data;
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="col-span-2">
        <h1 className={`text-2xl ${monsieur.className} mb-4` }>দ্যা বাংলা ✦ NEWS</h1>
        {newsData.map((news) => (
          <div key={news._id} className="p-5 rounded-lg bg-white/5 space-y-4">
            <Image
              src={news.image_url}
              alt={news.title}
              width={500}
              height={500}
              className="w-full"
            ></Image>
            <h1 className="text-2xl">{news.title}</h1>
            <p className="text-gray-400">{news.details}</p>
          </div>

))}
<GoBack></GoBack>
      </div>
      <SocialSide></SocialSide>
    </div>
  );
};

export default NewsDetails;
