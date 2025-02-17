"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Input from "./Input";
export default function FormSend({ text }) {
  let formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_zozes9p";
    const templateId = "template_jpf4xis";
    const publicKey = "hHAkj1TZY8ikQFSPM";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Erada Construction Company",
      message: message,
      MessageSubject: subject,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full p-0 flex flex-col items-start justify-start border outline-none md:p-5"
      text={text}
    >
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        value={name}
        tInput
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        tInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        name="Subject"
        id="subject"
        placeholder="Subject"
        tInput
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        type="text"
        name="Message"
        id="message"
        placeholder="Enter a Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="hover:bg-stone-600 duration-300 text-sm sm:text-lg px-3 py-1.5 md:px-6 md:py-3 bg-stone-800 text-white font-PoppinsE rounded-full mx-5 my-3"
      >
        {text}
      </button>
    </form>
  );
}
