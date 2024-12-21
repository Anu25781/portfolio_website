import React from 'react';
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img className={styles.AboutImg}  src="images/girl4.png" alt='me siting with a laptop' />

        <ul className={styles.AboutItems}>
          <li className={styles.AboutItem}>
            <img src="images/cursorIcon.png" alt='cursor image' />
            <div className={styles.AboutItemText}>
            <h3>Aspiring Frontend  Developer</h3>
            <p>Strong foundation in HTML, CSS, and JavaScript. Proficient in React and responsive design principles. Seeking to leverage my skills and passion for creating engaging user experiences to contribute to a dynamic Frontend  development team.</p>
            </div>
          </li>

          <li className={styles.AboutItem}>
            <img src="images/cursorIcon.png" alt='cursor image' />

            <div className={styles.AboutItemText}>
            <h3> Aspiring React js  Developer</h3>
            <p>I am a React Developer with a passion for creating intuitive and visually appealing web applications.</p>

            </div>
          </li>


        </ul>
      </div>


    </section>
  )
}

export default About
