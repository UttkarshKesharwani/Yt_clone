import React, { useEffect, useState } from "react";
import { You_tube } from "../Utils/Constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const data = await fetch(You_tube);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="  grid grid-cols-4 gap-1 cursor-pointer">
      {videos.map((videos) => {
        return (
          <Link key={videos.id} to={"/watch?v=" + videos.id}>
            <VideoCards info={videos} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
