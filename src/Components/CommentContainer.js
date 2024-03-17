import React from "react";
import { CommentsData } from "../Utils/CommentsData";

const CommentList = (props) => {
  const { Comments_data } = props;
  const { name, text } = Comments_data;
  return (
    <>
      {CommentsData.map((c) => {
        const { name, text } = c;
        return (
          <>
            <div className="flex gap-3 mb-2">
              <div className="">
                <img
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  alt=""
                  className=" w-8 "
                />
              </div>
              <div>
                <h6 className="text-xs">{name}</h6>
                <h6 className="text-xs ">{text}</h6>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const CommentContainer = () => {
  return (
    <>
      <CommentList Comments_data={CommentsData} />
    </>
  );
};

export default CommentContainer;
