import Link from "next/link";
import React from "react";

const Categories = ({ item ,id}) => {
    console.log(item  ,  id);
  return (
    <Link className={`${id === item.category_id? "bg-red-500" : "hover:bg-black/30"} py-1.5 block `} href={`/category/${item.category_id}`}>
      {item.category_name}
    </Link>
  );
};

export default Categories;
