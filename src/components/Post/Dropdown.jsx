import React, { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import Modal from "../Modal";

const Dropdown = ({ tweet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputRef = useRef();
  const close = () => {
    inputRef.current.checked = false;
  };

  const handleEdit = () => {
    setIsModalOpen(true);
    close();
  };

  const handleDelete = () => {
    const tweetRef = doc(db, "tweets", tweet.id);
    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı."))
      .catch(() => toast.error("Bir sorun oluştu."));
    close();
  };

  return (
    <>
      <label className="popup">
        <input ref={inputRef} type="checkbox" />
        <div className="burger" tabindex="0">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <ul>
            <li>
              <button onClick={handleEdit}>
                <MdEdit />
                <span>Düzenle</span>
              </button>
            </li>
            <li>
              <button onClick={handleDelete}>
                <FaTrash color="red" />
                <span>Sil</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
      {isModalOpen && <Modal tweet={tweet} close={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Dropdown;
