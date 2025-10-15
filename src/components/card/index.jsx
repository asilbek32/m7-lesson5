import { Button } from "antd";
import React from "react";

function Card({ title, price, image }) {
  return (
    <div className="bg-[#fafafa] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-gray-800 font-semibold text-base line-clamp-1">
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </h2>
        <p className="text-[#f42c37] font-semibold text-lg">
          {price.toLocaleString()} so'm
        </p>

        <div className="flex gap-3">
          <Button>edit</Button>
          <Button className="hover:bg-red-600">delete</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
