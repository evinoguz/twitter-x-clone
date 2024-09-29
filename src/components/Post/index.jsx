import { auth } from "../../firebase";
import Buttons from "./Buttons";
import Content from "./Content";
import Dropdown from "./Dropdown";
import UserInfo from "./UserInfo";

const Post = ({ tweet }) => {
  const isOwn = tweet.user.id === auth.currentUser.uid;

  return (
    <div className="flex gap-3 border-b py-6 px-3 border-zinc-600">
      {tweet?.user?.photo ? (
        <img src={tweet?.user?.photo} className="w-12 h-12 rounded-full" alt={tweet?.user?.name} />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gray-400" />
      )}

      <div className="w-full">
        <div className="flex justify-between">
          <UserInfo tweet={tweet} />
          {isOwn && <Dropdown tweet={tweet} />}
        </div>
        <Content tweet={tweet} />
        <Buttons tweet={tweet} />
      </div>
    </div>
  );
};

export default Post;
