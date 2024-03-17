import React from "react";

const VideoCards = (props) => {
  const { info } = props;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  // console.log(info);

  return (
    <div className="px-2 w-72 my-6">
      <div>
        <div>
          <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
        </div>
        <h3 className="text-sm mt-1 font-bold">{title}</h3>
        <h4 className="text-xs font-semibold">{channelTitle}</h4>

        <div>
          <span className="text-xs font-semibold">{statistics.viewCount} </span>
          <span className="font-semibold">views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
