"use client"
import {motion} from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const text = "Reach out "

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
                <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                    {/* TEXT CONTAINER */}
                    <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                        <div>
                            {text.split("").map((letter,index)=>(
                                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay: index * 0.1,}}>
                                    {letter}
                                </motion.span>
                            ))}
                            😃
                        </div>
                    </div>
                    {/* FORM CONTAINER */}
                    <form onSubmit={sendEmail} ref={form} className="h-auto lg:h-full lg:w-1/2 bg-neutral-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
                        <span>Dear Amanda Mendez,</span>
                        <textarea rows={6} className="bg-transparent border-2 outline-none resize-none" name="user_message"/>
                        <span>My email address is:</span>
                        <input type="text" className="bg-transparent border-2 outline-none" name="user_email"/>
                        <span>Regards</span>
                        <button className="bg-teal-500 rounded font-semibold text-white p-4">Send</button>
                        {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
                        {error && <span className="text-red-600 font-semibold">Something went wrong</span>}
                    </form>
                </div>
            </motion.div>
    );
};

export default ContactPage;