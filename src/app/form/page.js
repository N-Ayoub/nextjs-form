"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  GoogleReCaptcha as ReCAPTCHA,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleClosePopup = () => {
    setPopupVisible(false);
    reset();
  };
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data) => {
    if (!executeRecaptcha) {
      alert("Recaptcha not yet available");
      return;
    }
    setLoading(true);

    const recaptchaToken = await executeRecaptcha("submitForm");
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          ...data,
          recaptcha: recaptchaToken,
        }
      );
      setPopupVisible(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-[900px]">
      <h1 className="text-4xl font-bold mb-4">Form Page</h1>
      <form role="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="First Name"
            className="block text-sm font-medium text-white mb-2"
          >
            First Name
          </label>
          <input
            id="First Name"
            {...register("firstName", { required: true })}
            className="mt-1 block w-full text-black"
          />
          {errors.firstName && (
            <span className="text-red-500">First name is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="Last Name"
            className="block text-sm font-medium text-white mb-2"
          >
            Last Name
          </label>
          <input
            id="Last Name"
            {...register("lastName", { required: true })}
            className="mt-1 block w-full text-black"
          />
          {errors.lastName && (
            <span className="text-red-500">Last name is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email
          </label>
          <input
            id="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="mt-1 block w-full text-black"
          />
          {errors.email && (
            <span className="text-red-500">Valid email is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="Phone Number"
            className="block text-sm font-medium text-white mb-2"
          >
            Phone Number
          </label>
          <input
            id="Phone Number"
            {...register("phone", {
              required: true,
              pattern: /^\+\d{1,3}\d{10}$/,
            })}
            className="mt-1 block w-full text-black"
          />
          {errors.phone && (
            <span className="text-red-500">Valid phone number is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="Comment"
            className="block text-sm font-medium text-white mb-2"
          >
            Comment
          </label>
          <textarea
            id="Comment"
            {...register("comment", { required: true })}
            className="mt-1 block w-full text-black"
          />
          {errors.comment && (
            <span className="text-red-500">Comment is required</span>
          )}
        </div>
        <button
          name="Submit"
          type="submit"
          className="bg-transparent hover:bg-green-500 border-green-500 border-2 transition-all duration-500 py-3 px-6 rounded-[10px] text-white"
        >
          Submit
        </button>
      </form>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="loader">Submitting...</div>
        </div>
      )}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-500 p-4 rounded shadow-lg text-center">
            <p>Form submitted successfully</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-transparent border-2 border-red-500 transition-all duration-500 hover:bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
