import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import logo1 from "../../assets/logo.PNG";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state?.path?.pathname || "/";

  const handelLogin = (data) => {};

  return (
    <section className=" w-full h-screen flex justify-center items-center">
      <Helmet>
        <title>Login - WeShare!</title>
      </Helmet>
      <div className="md:h-[70vh] flex  justify-center items-center">
        <div className="w-[100vw] md:w-[500px]  shadow-lg flex flex-col justify-center items-center p-6  rounded-md">
          <div>
            <img src={logo1} alt="Logo.." />
          </div>
          <form onSubmit={handleSubmit(handelLogin)} className="w-full py-7">
            <h3 className="text-xl text-center font-semibold text-gray-700">
              Login
            </h3>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email!"
                required
                {...register("email")}
                className="input input-bordered w-full"
              />

              <p></p>
            </div>
            <div className="relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={viewPassword ? "text" : "password"}
                placeholder="******"
                required
                {...register("password")}
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Forgot Password ?</span>
              </label>
              <div
                onClick={() => setViewPassword(!viewPassword)}
                className="absolute cursor-pointer duration-300 text-gray-400 hover:text-gray-700 text-xl right-3 top-12"
              >
                {viewPassword ? (
                  // <p>
                  //   <i className="fa-solid fa-eye-slash"></i>
                  // </p>
                  <AiFillEyeInvisible />
                ) : (
                  <AiFillEye />
                  // <p>
                  //   <i className="fa-solid fa-eye"></i>
                  // </p>
                )}
              </div>
            </div>
            <div>
              <p className="text-center capitalize font-bold text-red-600">
                {authError}
              </p>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className={`input bg-primary text-white btn input-bordered w-full ${
                  loading && "loading"
                }`}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <div>
              <p className="label-text text-center mt-2">
                New to BlogXton?
                <Link to="../signup" className="text-primary pl-2 font-bold">
                  Create new account
                </Link>
              </p>
            </div>
          </form>
          <div className="divider my-4">OR</div>
          <button
            // onClick={googleSignInHandelar}
            className="btn hover:bg-primary btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
