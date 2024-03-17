import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/navSlice";
import { useSearchParams } from "react-router-dom";
import { You_tube_video_data } from "../Utils/Constant";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [description, setDescription] = useState(null);
  // console.log(searchParams);

  const query = searchParams.get("v");
  // console.log(searchParams.get("v"));
  console.log(description);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(You_tube_video_data + query);
      const json = await data.json();
      setDescription(json.items);
      // console.log(json.items);
      // console.log(description);
    };
    fetchData();
  }, [searchParams.get("v")]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  if (!description) return null;
  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <iframe
            className="rounded-lg "
            width="850"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            {description.map((items) => {
              return (
                <>
                  <h1 className="font-semibold mt-2 text-lg">
                    {items.snippet.title}
                  </h1>
                  <div>
                    <span className="text-sm font-medium">
                      {items.snippet.channelTitle}
                    </span>

                    <span className="inline-block ml-56">
                      <button
                        className="px-2 py-1 border-black border rounded-s-lg
                        border-e-0"
                      >
                        <FaThumbsUp className="" />
                        {/* <span className="">
                        {parseInt(items.statistics.likeCount / 1000) + "K"}
                      </span> */}
                      </button>

                      <button className="px-2 py-1 border  border-black rounded-e-lg rounded-s-none">
                        <FaThumbsDown />
                      </button>
                    </span>

                    <button className="mx-5 border border-black px-2 py-1 rounded-lg text-xs">
                      Share
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          <CommentContainer  />
        </div>
        <div>
          {/* for recommended videos */}
          <h1>hello form recoomended </h1>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
