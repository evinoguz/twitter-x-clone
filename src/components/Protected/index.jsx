import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Protected = () => {
  const [isAuth, setIsAuth] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  if (isAuth === false) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
  0;
};

export default Protected;
