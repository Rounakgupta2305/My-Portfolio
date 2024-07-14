"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Want to get in touch?";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col gap-12 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
             😊
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-4/5 my-auto lg:h-3/4 lg:w-1/2 bg-red-10 rounded-xl text-xl flex flex-col gap-8 justify-center"
        >
          <span>Dear Rounak,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>Your mail address:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <button className="bg-[#b36eff] hover:bg-[#c691ff] rounded font-semibold text-white p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>

      </div>
    </motion.div>
  );
};

export default ContactPage;
