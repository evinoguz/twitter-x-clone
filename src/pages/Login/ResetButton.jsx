import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ResetButton = ({ email }) => {
  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => toast.info("Şifre sıfırlama epostası gönderildi. Lütfen mailinizi kontrol ediniz."))
      .catch((err) => toast.error("Bir sorun oluştu: " + err.code));
  };
  return (
    <button onClick={handleReset} className="text-red-500">
      Şifrenizi mi unuttunuz?
    </button>
  );
};

export default ResetButton;
