import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const upload = async (file) => {
  if (!file || !file?.type.startsWith("image")) {
    return null;
  }
  const imageRef = ref(storage, v4() + file.name);

  await uploadBytes(imageRef, file);
  return await getDownloadURL(imageRef);
};
export default upload;
