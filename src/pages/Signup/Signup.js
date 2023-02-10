import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import logo1 from "../../assets/logo.PNG";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import {
  useCreateUserWithEmailAndPassword,
  useIdToken,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import createUser from "../../MiddlewareFunction/createUser";

const Signup = () => {
  const [viewPassword, setViewPassword] = useState(false);
  // const [user, loading, error] = useIdToken(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state?.path?.pathname || "/";

  const handelSignUp = (data) => {
    const { name, email, password } = data;

    createUserWithEmailAndPassword(email, password).then((info) => {
      if (info?.operationType) {
        updateProfile({ displayName: name }).then((update) => {
          if (update === true) {
            createUser(name, email);
            navigate(path, { location: true });
          }
        });
      }
    });
  };

  const googleSignInHandelar = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <Helmet>
        <title>Create New Account - BlogXton!</title>
      </Helmet>
      <div className="w-full h-screen flex  justify-center items-center">
        <div className="w-[100vw] md:w-[500px]  shadow-lg flex flex-col justify-center items-center p-6  rounded-md">
          <div>
            <img src={logo1} alt="Logo.." />
          </div>
          <form onSubmit={handleSubmit(handelSignUp)} className="w-full py-7">
            <h3 className="text-xl text-center font-semibold text-gray-700">
              Sign Up
            </h3>
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                {...register("name", { required: "Please Enter Your Name!" })}
                className={`input input-bordered w-full ${
                  errors.name && "border-red-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-600"> {errors.name?.message} </p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email!"
                {...register("email", {
                  required: "Please Enter Vaild Email!",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format!",
                  },
                })}
                className={`input input-bordered w-full ${
                  errors.email && "border-red-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={viewPassword ? "text" : "password"}
                placeholder="******"
                {...register("password", {
                  required: "Please Enter a Password!",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className={`input input-bordered w-full ${
                  errors.password && "border-red-600"
                }`}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}

              <div
                onClick={() => setViewPassword(!viewPassword)}
                className="absolute cursor-pointer duration-300 text-gray-400 hover:text-gray-700 text-xl right-3 top-12"
              >
                {viewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div>
              <p className="text-center font-bold text-red-600">{error}</p>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                value="Sign Up"
                className={`input btn bg-primary text-white input-bordered w-full ${
                  loading && "loading"
                }`}
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
            <div>
              <p className="label-text text-center mt-2">
                Already have and Account?
                <Link to="../login" className="text-primary pl-2 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="divider my-4">OR</div>
          <button
            onClick={googleSignInHandelar}
            className="btn hover:bg-primary btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
