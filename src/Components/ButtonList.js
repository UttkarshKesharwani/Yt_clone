import React from "react";
import Button from "./Button";

const buttonCategories = [
  "All",
  "Gaming",
  "Music",
  "Cooking",
  "Trending",
  "Computer Science",
  "JavaScript",
  "Rust",
  "C++",
  "MongoDB",
  "React",
  "Onyx",
  "CBSE",
  "New to you",
  "Lo-fi",
  // "Motivation",
  // "Arjit Singh",
  // "Shreya Ghosal",
  // "SuryaPurta Karna",
  // "B.Tech",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-auto w-[85vw]">
      {buttonCategories.map((val, ind) => {
        return <Button key={ind} name={val} />;
      })}

      {/* <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Cooking" />
      <Button name="Trending" />
      <Button name="Computer Science" />
      <Button name="JavaScript" />
      <Button name="Rust" />
      <Button name="C++" />
      <Button name="MongoDB" />
      <Button name="React" /> */}
    </div>
  );
};

export default ButtonList;
