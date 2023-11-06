"use client"
import { useState, FormEvent } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../button/customButton";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleMessageChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`E-posta: ${email}`);
    console.log(`Mesaj: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  justify-start items-left px-8 ">
      <input
        type="email"
        placeholder="E-posta..."
        value={email}
        onChange={handleEmailChange}
        className="border-b border-black  rounded-sm p-0.5 pl-8 flex-grow focus:outline-none "
      />
      <textarea
        placeholder="Mesajınız..."
        value={message}
        onChange={handleMessageChange}
        className="border-b border-black  rounded-sm p-0.5 pl-8 flex-grow focus:outline-none  mt-4"
      />
       <div className="flex justify-end ">
       <Button variant="primary" className=" text-gray-500  hover:text-black mt-4">Gönder</Button>
       </div>
    </form>
  );
};

export default Form;
