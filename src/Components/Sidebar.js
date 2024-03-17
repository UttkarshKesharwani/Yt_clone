import React, { useState } from "react";
import { useSelector } from "react-redux";
import Store from "../Utils/Store";

const Sidebar = () => {
  const isMenuOpen = useSelector((Store) => Store.nav.isNavOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="h-[100vh] w-48 px-4 py-2  overflow-y-auto top-0">
      <div className="flex items-center px-2 py-1 hover:bg-gray-500 hover:rounded-sm ">
        <ion-icon name="home-outline"></ion-icon>
        <span className="ml-4 text-sm">Home</span>
      </div>
      <div className="flex items-center px-2 py-1 hover:bg-gray-500 hover:rounded-sm ">
        <ion-icon name="trending-up-outline"></ion-icon>{" "}
        <span className="ml-4 text-sm">Shorts</span>
      </div>
      <div className="flex items-center px-2 py-1 hover:bg-gray-500 hover:rounded-sm ">
        <ion-icon name="add-outline"></ion-icon>{" "}
        <span className="ml-4 text-sm">Subscription</span>
      </div>
      <hr className="border border-gray-300 my-3" />

      <div className="flex items-center px-2 py-1 hover:bg-gray-500 hover:rounded-sm ">
        <ion-icon name="people-outline"></ion-icon>{" "}
        <span className="ml-4 text-sm">Your Channel</span>
      </div>
      <div className="flex items-center px-2 py-1 hover:bg-gray-500 hover:rounded-sm ">
        <ion-icon name="refresh-circle-outline"></ion-icon>{" "}
        <span className="ml-4 text-sm">History</span>
      </div>
      <div className="flex items-center px-2 py-1 hover:bg-gray-500 hover:rounded-sm ">
        <ion-icon name="videocam-outline"></ion-icon>{" "}
        <span className="ml-4 text-sm">Your Videos</span>
      </div>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
      <h1>Home</h1>
      <ul>
        <li>menu</li>
        <li>homw </li>
        <li>ahvhoe </li>
      </ul>
    </div>
  );
};

export default Sidebar;
