import React from 'react';
import styles from "./Hero.module.css";

const Hero = () => {
  return(
<section className={styles.container}>
<div className={styles.content}>
  <h1 className={styles.title}>Hi, I'm Anuradha</h1>
  <p className={styles.description}>
    I'm an Aspiring FrontEnd Developer.Reach out if you'd like to learn more!
  </p>
  <a className={styles.contactbtn} href="mailto:jhaa31101@gmail.com">Contact Me</a>
</div>
<img className={styles.anu} src="images/img1.avif" alt='my image'/>

<div className={styles.topBlur}/>
<div className={styles.bottomBlur}/>

</section>
  );
}

export default Hero
