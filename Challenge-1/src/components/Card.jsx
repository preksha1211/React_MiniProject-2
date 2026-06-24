import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaRegHeart,
  FaRegComment,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BiShare } from "react-icons/bi";

const Card = () => {
  return (
    <div className="w-80 border border-gray-200 rounded-2xl m-10 flex flex-col items-center gap-4 p-6 shadow-sm">
      
      <img
        className="w-28 h-28 object-cover rounded-full border-2 border-gray-200"
        src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNF9waG90b19vZl9hZnJpY2FuLWFtZXJpY2FuX3dvbWFuX2NvbXBhbnlfd29ya19kNmM4MmJhNS1iYjA2LTRkN2EtYjJlMy1hNDZhNDYyMjA0ZmZfMS5qcGc.jpg"
        alt="profile"
      />

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-xl font-bold text-gray-800">CodingLabs</h1>
        <h3 className="text-sm text-gray-500 font-normal">Youtuber and Blogger</h3>
      </div>

      <div className="flex gap-4 text-xl text-gray-500">
        <FaFacebook className="text-blue-600 cursor-pointer transition" />
        <FaYoutube className="text-red-600 cursor-pointer transition" />
        <AiFillTwitterCircle className="text-sky-400 cursor-pointer transition" />
        <GrInstagram className="text-pink-500 cursor-pointer transition" />
      </div>

      <div className="flex gap-3">
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-full transition">
          Subscribe
        </button>
        <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2 rounded-full transition">
          Message
        </button>
      </div>

      <div className="flex gap-6 text-gray-500 text-sm border-t border-gray-100 pt-3 w-full justify-center">
        <div className="flex items-center gap-1.5 cursor-pointer transition">
          <FaRegHeart />
          <p>60</p>
        </div>
        <div className="flex items-center gap-1.5 cursor-pointer transition">
          <FaRegComment />
          <p>60</p>
        </div>
        <div className="flex items-center gap-1.5cursor-pointer transition">
          <BiShare />
          <p>60</p>
        </div>
      </div>

    </div>
  );
};

export default Card;