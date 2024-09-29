import { doc, updateDoc } from "firebase/firestore";
import { IoMdClose } from "react-icons/io";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import upload from "../../utils/upload";
import { useState } from "react";
import Loader from "../Loader";

const Modal = ({ tweet, close }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target[0].value;
    const file = e.target[1].files[0];
    const tweetRef = doc(db, "tweets", tweet.id);
    setIsLoading(true);

    try {
      if (!file || !file.type.startsWith("image")) {
        await updateDoc(tweetRef, {
          textContent: text,
          isEdited: true,
        });
        toast.success("Güncelleme işlemi başarılı.");
        return close();
      }
      const newUrl = await upload(file);
      await updateDoc(tweetRef, {
        textContent: text,
        imageContent: newUrl,
        isEdited: true,
      });
      toast.success("Güncelleme işlemi başarılı.");
    } catch (err) {
      toast.error("Bir hata oluştu.");
    }
    setIsLoading(false);
    close();
  };
  return (
    <div className="fixed inset-0 w-full h-full grid place-items-center bg-gray-500 bg-opacity-40">
      <div className="bg-black rounded-md py-10 px-8 w-3/4 min-h-[60vh] max-h-[80vh] max-w-[600px] min-w-[400px]  flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Tweet'i Düzenle</h1>
          <button onClick={close}>
            <IoMdClose className="text-3xl transition hover:text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 mt-10 flex flex-col justify-between">
          <div className="flex flex-col">
            <label className="mb-4">İçeriği Değiştir</label>
            <textarea
            rows={8}
              name="title"
              className="border rounded-md p-1 text-black overflow-hidden outline-none p-3"
              defaultValue={tweet.textContent}
            />
            <img src={tweet.imageContent} className="mt-5 mb-3 w-full rounded-lg object-cover max-w-[250px]" />

            <label className="mb-4">Fotoğraf Ekle|Değiştir</label>

            <input type="file" name="file" />
          </div>

          <div className="flex justify-end gap-5">
            <button
              onClick={() => close()}
              type="button"
              className="bg-gray-500 py-2 px-4 rounded-full hover:bg-gray-600"
            >
              Vazgeç
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className="bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 min-w-[80px] flex justify-center"
            >
              {isLoading ? <Loader /> : "Kaydet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
