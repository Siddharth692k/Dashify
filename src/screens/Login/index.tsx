import React from "react";
import "./style.css";
import useLogin from "../../custom hooks/useLogin";
import logo from "../../assets/png/Designer.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    isSignIn,
    formData,
    setFormData,
    disabled,
    handleCta,
    toggleSignInForm,
  } = useLogin();

  return (
    <>
      <Helmet>
        {!!isSignIn ? <title>Sign Up</title> : <title>Sign in</title>}
        <meta
          name="description"
          content="Sign up now and equip the powerful Ecommerce Dashboard"
        />
        <meta
          name="google-site-verification"
          content="B9LvjdiXItYHSuK6-OzjvXe69syxxWIq7r2KZu0e8f4"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="loginContainer">
        <div className="loginContainerOne">
          <div className="descriptionContainer">
            <div className="loginTitleContainer">
              <img src={logo} alt="logo" />
              <h2>Dashify</h2>
            </div>
            <h3>Navigate Success, Seamlessly</h3>
            <p>
              Discover the ultimate eCommerce Dashboard, revolutionizing how you
              manage your online business. Simplify operations, boost
              productivity, and unlock new levels of efficiency. With powerful
              tools and intuitive features, seize control of your eCommerce
              journey like never before.
            </p>
          </div>
        </div>
        <div className="loginContainerTwo">
          <div className="loginContentsContainer">
            <p className="SignTitle">{!isSignIn ? "Sign In" : "Sign Up"}</p>
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
              className="SignInForm"
            >
              {!!isSignIn && (
                <>
                  <input
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    value={formData.userName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        userName: e.target.value,
                      }))
                    }
                    type="text"
                    placeholder="User Name"
                  />
                </>
              )}
              <input
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    emailAddress: e.target.value,
                  }))
                }
                type="text"
                placeholder="email address"
              />
              <input
                value={formData.passWord}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, passWord: e.target.value }))
                }
                type="password"
                placeholder="Password"
              />
              <button
                onClick={handleCta}
                disabled={disabled}
                className="Signbtn"
              >
                <Link
                  to="/Dashboard"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  {!isSignIn ? "Sign In" : "Sign Up"}
                </Link>
              </button>
              <span onClick={toggleSignInForm}>
                {isSignIn ? "Already a User? Sign In" : "New User? Sign Up Now"}
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
