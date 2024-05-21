import { useState } from "react";

const useLogin = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    emailAddress: "",
    passWord: "",
  });
  const [disabled, setDisabled] = useState(false);
  const handleCta = () => {
    // handle "Sign In" : "Sign Up"
    console.log("handlecta");
  };
  const toggleSignInForm = () => {
    setSignIn((prev) => !prev);
  };
  return {
    isSignIn,
    setSignIn,
    formData,
    setFormData,
    disabled,
    setDisabled,
    handleCta,
    toggleSignInForm,
  };
};

export default useLogin;
