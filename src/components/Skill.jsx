import React from 'react';

import styles from "./Skill.module.css";
import skills from "./skills.json";

const Skill = () => {
  return (
    <section id="skills" className={styles.container}>
<h2 className={styles.title}
>My Skills</h2>
<div className={styles.content}>
  <div className={styles.skills}>{
    skills.map((skill, id)=>{
return <div key={id} className={styles.skill}>
  <div className={styles.skillImageContainer}><img src={skill.imageSrc} alt={skill.title}/></div>

  <p>{skill.title}</p>
</div>
    }
      
    )
    }</div>
  
</div>
    </section>
  )
}

export default Skill;
