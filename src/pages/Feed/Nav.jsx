import React from "react";
import { navSections } from "../../constants";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Nav = ({ user }) => {
  return (
    <nav className="flex flex-col justify-start items-end px-2 py-4 mb-5">
      <div>
        <div className="flex align-items-center justify-center">
          <img src="x-logo.webp" className="w-14 mb-4" alt="logo" />
        </div>

        {navSections?.map((i, key) => (
          <div
            key={key}
            className="flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-[#505050b7] max-md:justify-center"
          >
            {i.icon}
            <span className="whitespace-nowrap max-md:hidden">{i.title}</span>
          </div>
        ))}
      </div>
      <div className="my-8 md:me-10">
        {!user ? (
          <div className="grid place-items-center animate-bounce">
            <div className="w-12 h-12 rounded-full bg-gray-400" />
            <div className="w-[40px] h-[5px] bg-zinc-400 mt-5 max-md:hidden" />
            <div className="w-[30px] h-[5px] bg-zinc-400 m-5 max-md:w-[10px]" />
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-2">
              {user?.photoURL ? (
                <img src={user?.photoURL} className="rounded-full max-w-[45px] max-h-[45px]" alt={user?.displayName} />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-400" />
              )}

              <p className="max-md:hidden">{user?.displayName}</p>
            </div>
            <button
              onClick={() => signOut(auth)}
              className="flex justify-center items-center gap-1 md:text-[15px] p-1 bg-zinc-700 rounded text-xl transition hover:bg-zinc-900"
            >
              <RiLogoutCircleRLine color="gray" />
              <span className="max-md:hidden">Çıkış yap</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
