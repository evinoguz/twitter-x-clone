import moment from "moment";
import React from "react";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
      <p>{tweet?.user.name}</p>
      <p className="text-gray-400 text-sm">@{tweet?.user?.name?.toLowerCase().replace(" ", "_")}</p>
      <p className="text-gray-400 text-sm">{moment(tweet?.createdAt?.toDate()).fromNow()}</p>
      {tweet?.isEdited && (
        <p className="text-gray-400 text-xs">
          <span className="max-md:hidden">*düzenlendi</span>
          <MdEdit className="md:hidden" />
        </p>
      )}
    </div>
  );
};

export default UserInfo;
