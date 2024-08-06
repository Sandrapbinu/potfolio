import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contacts" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            required
          />
        </div>
        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
