import './App.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Course from './Course';
import html from './assets/hero.png'
import css from './assets/react.svg'
import js from './assets/vite.svg'

function App() {
  return (
    <div>
      <>
      <Course name="HTML" prize="199$" image={html} rating={5}/>
      <Course name="CSS" prize="199$" image={css}/>
      <Course  name="JS" prize="199$" image={js}/>
      
    
  </>
  </div>
  );
}

export default App