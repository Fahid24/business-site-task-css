import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f4330p6', 'template_06l84hp', form.current, 'P7950myh5qvDIqce_')
            .then((result) => {
                toast('successfully sended');
            }, (error) => {
                toast('problem to send message');
            });
        e.target.reset()
    };

    return (
        <>
            <div className=" px-10 bg-base-100 max-w-xl mt-16 mx-auto">
                <div className="grid justify-center gap-4 grid-cols-1">
                    <div>
                        <h2 className="text-3xl font-semibold font-">LET'S STAY IN TOUCH</h2>
                        <p className='text-md font-sans'>contact us</p>
                    </div>
                    <form className='grid grid-cols-1 text-center justify-center gap-2 ' ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='your name' required className="input input-bordered input-primary max-w-xl " />
                        <input type="text" name='email' placeholder='your email' required className="input  input-bordered input-primary max-w-xl " />
                        <textarea name='message' className="textarea  textarea-primary max-w-xl" required placeholder="Your message"></textarea>
                        <input className='btn rounded-full  btn-primary lg:max-w-xs rounded-0  text-xl normal-case text-white ' type="submit" value='Send' />
                    </form>

                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Contact;