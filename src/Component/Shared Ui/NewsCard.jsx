import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({news}) => {
  return (
<div className=" bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-4 font-sans">
      
      {/* Header: Author & Actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image 
              src={news.author.img}
              width={500}
              height={200} 
              alt="Author" 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-800">{news.author.name}</h4>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-400">
          <button className="hover:text-blue-500 transition-colors">
            <CiBookmark></CiBookmark>
          </button>
          <button className="hover:text-blue-500 transition-colors">
            <IoMdShare></IoMdShare>
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-extrabold text-gray-800 mb-4 leading-tight">
        {news.title}
      </h2>

      {/* Main Image */}
      <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
        <Image 
          src={news.image_url}
          width={500}
          height={200}
          alt="News Thumbnail" 

          className="object-cover  w-full h-full"
        />
      </div>

      {/* Content & Tags */}
      <div className="text-sm text-gray-500 mb-3">
        <p className="mb-2 italic">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News...
        </p>
        <p className="line-clamp-2 text-gray-600 ">
         {news.details}
        </p>
      </div>

      {/* Read More Link */}
      <Link href="/news-details" className="text-orange-500 font-bold text-sm hover:underline">
        Read More
      </Link>

      <hr className="my-4 border-gray-100" />

      {/* Footer: Rating & Views */}
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center gap-1">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <CiStar key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-sm font-medium ml-1">4.9</span>
        </div>
        <div className="flex items-center gap-1.5">
         <FaRegEye />
          <span className="text-sm font-medium">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
