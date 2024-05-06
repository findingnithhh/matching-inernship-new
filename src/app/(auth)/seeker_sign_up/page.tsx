// Signup.tsx
'use client'
import * as Yup from "yup";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/legacy/image";
import "../../globals.css";
import { Icon } from "@/components";
import { SeekerSignUpSchema } from "../../../validation/seekerSignUp";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await SeekerSignUpSchema.validate(
        { firstname, lastname, email, password },
        { abortEarly: false }
      );

      // Your signup logic goes here
      console.log("Signing up with:", { firstname, lastname, email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((e) => {
          switch (e.path) {
            case "firstname":
              setFirstnameError(e.message);
              break;
            case "lastname":
              setLastnameError(e.message);
              break;
            case "email":
              setEmailError(e.message);
              break;
            case "password":
              setPasswordError(e.message);
              break;
            default:
              break;
          }
        });
      } else {
        setSignupError("Error signing up. Please try again.");
      }
    }
  };

  const handleFirstnameFocus = () => {
    setFirstnameError("");
  };

  const handleLastnameFocus = () => {
    setLastnameError("");
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };

  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Use flexbox to make it full height */}
      <div className="left hidden lg:block w-full h-full p-10 bg-[#18181B] flex-col justify-between rounded-r-2xl">
        {/* <div>⚛</div> */}
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/auth/signup.svg"
            alt="login"
            width={450}
            height={450}
            className="mb-20"
          />
        </div>
      </div>
      <div className="right w-full p-10">
        <div className="text-end">
          <Link href="/login" color="primary" className="text-sm">
            Login
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          {/* Use flexbox to make it full height */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="-mt-20 mb-10"
            />
          </Link>
          <div className="text-center">
            <h1 className="font-bold mb-1 text-lg">Create an account</h1>
            <p className="text-gray-500 text-sm text-center w-[380px]">
              Enter your email below to sign up with Matching Internship
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="relative">
              <Input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Your firstname"
                className={`w-[350px] ${
                  firstnameError
                    ? "border-red-500"
                    : ""
                }`}
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                onFocus={handleFirstnameFocus}
              />
              {firstnameError && (
                <div className="text-red-500 text-xs mt-1">
                  {firstnameError}
                </div>
              )}
            </div>
            <div className="relative mt-4">
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Your lastname"
                className={`w-[350px] ${
                  lastnameError
                    ? "border-red-500"
                    : ""
                }`}
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                onFocus={handleLastnameFocus}
              />
              {lastnameError && (
                <div className="text-red-500 text-xs mt-1">{lastnameError}</div>
              )}
            </div>
            <div className="relative mt-4">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className={`w-[350px] ${
                  emailError
                    ? "border-red-500"
                    : ""
                }`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onFocus={handleEmailFocus}
              />
              {emailError && (
                <div className="text-red-500 text-xs mt-1">{emailError}</div>
              )}
            </div>
            <div className="relative mt-4">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password123"
                className={`w-[350px] ${
                  passwordError
                    ? "border-red-500"
                    : ""
                }`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                onFocus={handlePasswordFocus}
              />
              {passwordError && (
                <div className="text-red-500 text-xs mt-1">{passwordError}</div>
              )}
            </div>
            <Button
              type="submit"
              className="mt-4 w-[350px] bg-[#343A40] hover:bg-[#4a535c]"
            >
              Sign Up
            </Button>
            {signupError && (
              <div className="text-red-500 text-xs mt-1">{signupError}</div>
            )}
          </form>
          <div className="mt-5">
            <span className="flex text-gray-300">or continue with</span>
          </div>
          <div className="flex flex-col w-[350px]">
            <Button
              className="mt-4 mb-2 flex justify-center items-center"
              variant="outline"
            >
              <Icon label="Google" className="-ml-10 mr-5" />
              Continue with Google
            </Button>

            <Button
              className="flex justify-center items-center"
              variant="outline"
            >
              <FaFacebook className="-ml-6 mr-5 w-[22px] h-[22px] text-blue-600" />
              Continue with facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
