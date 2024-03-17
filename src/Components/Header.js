import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../Utils/navSlice";
import { current } from "@reduxjs/toolkit";
import { you_tube_search_suggestion_api } from "../Utils/Constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // ! I will call api every time when my searchQuery changes
  useEffect(() => {
    console.log(searchQuery);
    // ! make an api call after every key press
    // ! but if the difference bw 2api calls is <200ms ,then decline the api call
    const time = setTimeout(() => {
      return fetchApi();
    }, 200);

    // !To ignore the API response. Whenever the input changes, state is set and hence useEffect runs again, which invokes a new API call.
    // ! To ignore the old API call result, the returned function of useEffect is written
    // ! this whole return function is call when the component is unmounted
    return () => {
      clearTimeout(time);
    };
  }, [searchQuery]);

  console.log(suggestions);
  const fetchApi = async () => {
    const data = await fetch(you_tube_search_suggestion_api + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const handleToggleNavMenu = () => {
    dispatch(toogleMenu());
  };
  const printing = () => {};
  return (
    <div className="flex items-center justify-between px-4 py-10 h-11 w-[100%]  shadow-lg">
      <div className="flex items-center">
        <img
          className="w-10 h-7  bg-transparent mr-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEuWeDMgVc6bRp1duo5kv_ESN6GTqBn6ZXA&usqp=CAU"
          alt="hamburger_logo"
          onClick={handleToggleNavMenu}
        />
        <img
          className="w-40 h-8 mix-blend-multiply"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="yt_logo"
        />
      </div>
      <div>
        {/* // ! In React, the onFocus event is used to trigger a function when an element receives focus.
      // ! This event is typically used with form elements like <input>, <textarea>, and <select>. */}

        <input
          type="text"
          className=" border border-black rounded-l-full  px-4 py-2 w-[450px] "
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        <button
          className="border border-black px-4 py-2 rounded-r-full bg-gray-300 "
          onClick={printing}
        >
          🔍
        </button>
        <div className="fixed w-[450px] bg-gray-50 rounded-lg px-2  ">
          {isFocused &&
            suggestions.map((sugg) => {
              return (
                <li
                  key={sugg}
                  className="list-none px-2 py-1 hover:bg-gray-100"
                >
                  🔍 {sugg}
                </li>
              );
            })}
          {/* <ul className="hover:bg-gray-100">
            <li className="hover:bg-gray-100 py-1 px-2">iphone</li>
            <li className="hover:bg-gray-100 py-1 px-2">iphone pro</li>
            <li className="hover:bg-gray-100 py-1 px-2">iphone pro max</li>
          </ul> */}
        </div>
      </div>

      <div>
        <img
          className="w-12"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
