import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>First Name</label>
      <input type="text" name="firstName" />
      <label>Last Name</label>
      <input type="text" name="lastName" />
      <label>Email</label>
      <input type="email" name="userEmail" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="send" />
    </form>
  );
};

export default Contact;
