
import styles from  './App.module.css';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  

  return (
    <>
     <div className={styles.App}>
<Navbar />
<Hero />
<About />
<Skill />
<Projects />
<Contact />

     </div>
    </>
  )
}

export default App;
