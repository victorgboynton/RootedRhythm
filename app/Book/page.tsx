"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Book() {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageFail, setMessageFail] = useState(false);
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const apiKey = process.env.NEXT_PUBLIC_EMAIL_ACCESS_TOKEN;
    if (!apiKey) {
      throw new Error("Invalid Email Access Token");
    }
    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setMessageSuccess(true);
      console.log(result);
      event.target.reset();
      alert("Message sent successfully!");
    } else {
      setMessageFail(true);
      alert("Message send failed, please try again later.");
    }
  }

  return (
    <div className="flex flex-col mt-[20vh] rounded-md w-[90vw] sm:w-[60vw] lg:w-[40vw] bg-[#131349] items-center pt-10 max-h-[95vh] text-white mx-auto justify-center font-Anta">
      <h1 className="text-[40px] text-center">Book us for a gig:</h1>
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-[50vh] w-[80vw] sm:w-[50vw] lg:w-[30vw] mx-auto sm:mx-20"
        >
          <label htmlFor="name" className="">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="rounded-xl mb-2 px-2 py-1 text-black"
            required
          />
          <label htmlFor="email" className="">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@email.com"
            className="rounded-xl mb-2 text-black px-2 py-1"
            required
          />
          <label htmlFor="message" className="">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Hello, I'd like to book you for a show in March"
            className="rounded-xl p-[4px] text-black"
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            className="font-ribeye text-2xl p-2 border-2 w-32 mx-auto rounded-full border-black bg-purple-900 mt-3 font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
