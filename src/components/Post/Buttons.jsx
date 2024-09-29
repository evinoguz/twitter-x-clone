import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { FaHeart, FaRegHeart, FaRetweet } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import { auth, db } from "../../firebase";

const Buttons = ({ tweet }) => {
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  const toggleLike = async () => {
    const tweetRef = doc(db, "tweets", tweet.id);
    await updateDoc(tweetRef, {
      likes: isLiked ? arrayRemove(auth.currentUser.uid) : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#33c1f93f]">
        <LuMessageCircle />
      </div>
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#00ff2a44]">
        <FaRetweet />
      </div>
      <div
        onClick={toggleLike}
        className="flex gap-2 items-center p-3 rounded-full cursor-pointer transition hover:bg-[#ff00d444]"
      >
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}

        <span>{tweet.likes.length}</span>
      </div>
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#3b3b3bac]">
        <MdOutlineSignalCellularAlt />
      </div>
    </div>
  );
};

export default Buttons;
