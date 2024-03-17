import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="px-2 py-1 my-2 mx-1  bg-gray-300 rounded-lg ">
        {name}
      </button>
    </div>
  );
};

export default Button;
