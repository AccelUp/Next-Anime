"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

interface AnimeData {
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

interface TopAnime {
  title: string;
  image_url: string;
}

const Home = () => {
  const [data, setData] = useState<AnimeData[]>([]);
  const [topAnime, setTopAnime] = useState<TopAnime[]>([]);

  useEffect(() => {
    const getItemsData = async () => {
      try {
        const [latestResponse, topResponse] = await Promise.all([
          axios.get("https://api.jikan.moe/v4/seasons/2023/fall"),
          axios.get("https://api.jikan.moe/v4/top/anime"),
        ]);
        const latestData = latestResponse.data.data;
        const topData = topResponse.data.data;
        setData(latestData);
        setTopAnime(topData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getItemsData();
  }, []);

  return (
    <div className="flex flex-row bg-slate-600 min-h-screen pt-36 lg:px-20 pb-10 ">
      <div className="flex flex-wrap md:w-screen ">
        <div className="flex items-center text-lg font-bold mb-2 rounded-md px-4 mx-2 h-14 w-full border-b border-slate-400 bg-slate-800">
          <h1>Latest Anime</h1>
        </div>

        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 ">
            <div className="relative">
              <img
                src={item.images.jpg.image_url}
                alt={item.title}
                className="object-cover w-screen h-40 rounded-t-md"
              />
            </div>
            <div className="rounded-b-md bg-slate-800 w-full h-36 p-4 flex flex-col">
              <div>
                <h1 className="text-center text-base font-bold">
                  {item.title}
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-justify text-xs pt-2 pb-7">
                  {item.synopsis}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-col w-[30rem] hidden lg:flex">
        <div className="flex items-center text-lg font-bold rounded-t-md px-4 mx-2 h-14 w-full border-b border-slate-400 bg-slate-800">
          <h1>Top Anime</h1>
        </div>
        {topAnime.map((top, index) => (
          <div
            key={index}
            className="flex items-center text-lg font-bold px-4 mx-2 h-16 w-full border-b border-slate-400 bg-slate-800"
          >
            <img
              className="h-11 w-10 object-cover"
              src={top.images.jpg.image_url}
              alt=""
            />
            <div className="pl-3 text-base font-light">{top.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
