import React from 'react';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="images/emailIcon.png" alt="Email Icon"/>
          <a href="mailto:jhaa31101@gmail.com">jhaa31101@gmail.com</a>
        </li>

        <li  className={styles.link}>
          <img src="images/linkedinIcon.png" alt="Linkedin Icon"/>
          <a href="https://www.linkedin.com/in/anuradha-jha-68a24b2b9/">Linkedin.com/Anuradha jha</a>
        </li>

        <li  className={styles.link}>
          <img src="images/githubIcon.png" alt="github Icon"/>
          <a href="https://github.com/Anu25781">github.com/Anu25781</a>
        </li>

        <li  className={styles.link}>
          <img src="images/codingninjas.png" alt="codingninja Icon"/>
          <a href="https://www.naukri.com/code360/profile/24e57ce8-81f3-42c8-b3c5-772348209f22">code360 by codingninjas</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact;
