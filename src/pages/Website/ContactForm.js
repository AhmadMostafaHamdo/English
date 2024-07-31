import axios from "axios";
import Nav from "../../Component/Website/Nav";
import { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  async function submit() {
    try {
      let res = await axios
        .post("http://localhost:3001/api/connect", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          subject: subject,
          message: message,
        })
        .then((t) => console.log(t));

      if (res.status === 200) {
        window.location.pathname = "/home";
      } else if (res.status === 500) {
        window.location.pathname = "/";
      }
    } catch (e) {
      console.log(e);
    }
    // console.log(firstName + lastName+email+subject+message)
  }
  return (
    <div className="connect-form">
      <Nav />
      <div className="container">
        <div className="connect-container">
          <div className="form-grop">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="firstName"
              className="input-form"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="lastName"
              className="input-form"
            />
          </div>
          <div className="form-grop">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input-form"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="subject"
              className="input-form"
            />
          </div>
          <div className="form-grop">
            {" "}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message"
              className="input-form"
            />
          </div>
          <button onClick={submit} className="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
