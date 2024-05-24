import React, { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import ReCAPTCHA from 'react-google-recaptcha';

import Loader from '../components/Loader';
import Minion from '../models/Minion';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    if (!token) {
      showAlert({
        show: true,
        text: 'Please complete the reCAPTCHA',
        type: 'danger'
      });
      return;
    }
    setIsLoading(true);
    setCurrentAnimation('Armature_Attack 04_full');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Alexander",
        from_email: form.email,
        to_email: import.meta.env.VITE_APP_EMAILJS_EMAIL,
        message: form.message,
        'g-recaptcha-response': token,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({
        show: true,
        text: 'Message sent successfully!',
        type: 'success'
      });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('Armature_Stand Dance_full');
        setForm({ name: '', email: '', message: '' });
        recaptchaRef.current.reset();
      }, 3000);

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Armature_Stand_full');
      console.log(error);
      showAlert({
        show: true,
        text: 'I didnt receive your message!',
        type: 'danger'
      });
    });
  };

  const handleFocus = () => { setCurrentAnimation('Armature_Walk 01_full') };
  const handleBlur = () => { setCurrentAnimation('Armature_Stand_full') };

  const onReCAPTCHAChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <section className="relative flex lg:flex-row lg:gap-5 flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch!</h1>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your Email Address"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know what you want to talk about!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />

          <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />}>
            <Minion
              currentAnimation={currentAnimation}
              position={[0, -2, 0]}
              rotation={[12.6, 0, 0]}
              scale={[2.3, 2.3, 2.3]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
