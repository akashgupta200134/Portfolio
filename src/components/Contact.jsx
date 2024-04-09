import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tq2fkhk', 'template_6a9t5c4', form.current, {
        publicKey: 'meNPeORxgm5mmndyC',
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
  
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="max-w-md mx-auto mb-10 -mt-8">
        <p className=" text-4xl font-bold text-white">Get In Touch</p>
        <form ref={form} onSubmit={sendEmail} className=" mt-6">
          <div className="mb-4">
            <label
              htmlFor="fname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {" "}
              Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Enter your email..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write your thoughts here.."
              style={{ height: "150px" }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send"
            className="text-center font-semibold border w-96 h-12 bg-white ml-[30px] rounded-lg"
          />
        </form>
      </div>
<Footer></Footer>
     

    </div>
  );
};

export default Contact;
