"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItemsData = async () => {
      const response = await axios.get(
        "https://api.jikan.moe/v4/seasons/2023/summer"
      );
      const { data } = response.data;
      // console.log(data);
      setData(data);
    };

    getItemsData();
  }, []);

  return (
    <div className="bg-slate-600">
      <div className="flex flex-wrap justify-start pt-36 px-2 sm:px-16">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="rounded-sm h-60">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={item.images.webp.image_url}
                alt={item.title}
              />
            </div>
            <div className="rounded-b-md bg-slate-800 w-full h-36 p-4 flex flex-col">
              <div>
                <h1 className="text-center text-base font-bold">
                  {item.title}
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-justify text-xs">{item.synopsis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
