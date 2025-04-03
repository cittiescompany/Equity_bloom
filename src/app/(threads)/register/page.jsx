/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "@/api/auth";
import { AxiosError } from "axios";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { user } from "@nextui-org/react";
import { LiaSpinnerSolid } from "react-icons/lia";

const page = () => {
  const { mutateAsync: signup, isPending } = useSignupMutation();
  const toast = useToast();
  const {authenticate} = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const password = watch("password");

  const submit = async (values) => {
    try {
      delete values.confirmPassword;
      const res = await signup({...values,role:'user'});
      authenticate({user:res.data.user,token:res.data.token});
      toast.success({ message: "Successfully signed up" });
    } catch (e) {
      if (e instanceof AxiosError) {
        return toast.error({
          message:
            e.response?.data?.message ?? e.response?.data ?? "Error signing up",
        });
      }
      toast.error({ message: "Error signing up" });
    }
  };
  return (
    <section className="flex py-11 flex-col items-center px-10 w-full h-screen">
      {/* <main className=" w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 "> */}
      <main className="w-full md:w-3/4">
        {/* <h1 className="text-center text-5xl">Citties</h1> */}
        <form onSubmit={handleSubmit(submit)} className="mt-16">
          <h3 className="opacity-60 font-[Inter] font-bold text-blue-800 text-2xl my-4 text-center">
            Create an account
          </h3>
         <div className="flex flex-col gap-6 mt-8">
          <div className="flex gap-6 flex-col sm:flex-row">
         <div className="flex flex-col w-full ">
            <label htmlFor="" className="opacity-70">
              First Name
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none w-full text-[#000000] border transition-colors duration-100 focus:border-[#596A95] border-gray-300 rounded-lg"
              name="firstName"
              {...register("firstName", {
                required: "First name is required",
              })}
              placeholder="Enter first name"
              type="text"
              disabled={isPending}
            />
            {errors?.firstName?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.firstName?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="" className="opacity-70">
              Last Name
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none w-full text-[#000000] border transition-colors duration-100 focus:border-[#596A95] border-gray-300 rounded-lg"
              name="lastName"
              {...register("lastName", {
                required: "Last name is required",
              })}
              placeholder="Last Name"
              type="text"
              disabled={isPending}
            />
            {errors?.lastName?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.lastName?.message}
              </p>
            )}
          </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="opacity-70">
              Email Address
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none w-full text-[#000000] border transition-colors duration-100 focus:border-[#596A95] border-gray-300 rounded-lg"
              name="email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email",
                },
              })}
              placeholder="Enter email"
              type="text"
              disabled={isPending}
            />
            {errors?.email?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="opacity-70">
              Password
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none w-full text-[#000000] border transition-colors duration-100 focus:border-[#596A95] border-gray-300 rounded-lg"
              name="text"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              placeholder=""
              type="text"
              disabled={isPending}
            />
            {errors?.password?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.password?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="opacity-70">
              Confirm Password
            </label>
            <input
              className="bg-[#FFF] px-4 py-3 outline-none w-full text-[#000000] border transition-colors duration-100 focus:border-[#596A95] border-gray-300 rounded-lg"
              name="text"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              disabled={isPending}
              placeholder=""
              type="text"
            />
            {errors?.confirmPassword?.message && (
              <p className="text-red-500 text-base italic">
                {errors?.confirmPassword?.message}
              </p>
            )}
          </div>
         </div>
          <p className="mt-10 text-[1rem] opacity-60">
            By using Citties, you agree to our E-sign Disclosure and Consent
            Notice, Privacy Policy, and User Agreement.
          </p>

          <button
            disabled={isPending}
            type="submit"
            className={`w-full h-[50px]  text-[1.1rem] mt-10  bg-[#2753c2] text-white rounded-lg transition-all duration-150 ease-in-out ${ isPending?'opacity-20':''}`}
          >
            {isPending? <span className="flex gap-2 items-center justify-center"><LiaSpinnerSolid size={20} className="animate-spin" />Loading...</span> :'Sign Up'} 
          </button>
        </form>
        <div className="flex items-center gap-4 my-8">
<hr className="w-full bg-gray-400 h-0.5" />
        <span>OR</span>
<hr className="w-full bg-gray-400 h-0.5" />
        </div>
        <div className="flex flex-col gap-6 my-4">
        <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white shadow p-4 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
              alt="Google logo"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        <button
            type="button"
            className="w-full flex items-center justify-center gap-2 text-white shadow p-4 rounded-lg bg-gray-900 hover:bg-gray-800 focus:outline-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/2048px-Apple_Store_logo.svg.png"
              alt="Apple logo"
              className="w-6 h-6"
            />
            Continue with Apple
          </button>
        
        </div>
     
        <div className="flex mb-20 mt-10 gap-2 opacity-75 justify-center">
          <p>Already have an account? </p>
          <Link href="/login" className="underline text-blue-500">
              Sign In
          </Link>
        </div>
      </main>
    </section>
  );
};

export default page;
