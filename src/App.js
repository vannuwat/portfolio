import './App.css';
import ScrollReveal from 'scrollreveal';
import React, { useEffect, useState } from 'react'; //useRef

function App() {

  const [open, setOpen] = useState(false);
  // const divRef = useRef(null);

  useEffect(() => {

    ScrollReveal().reveal('.hero-img-anime, .grid-container-program, .grid-container-front, .grid-container-back, .grid-container-web',{
      duration: 1000,
      distance: '30px',
      easing: 'ease',
      origin: 'top',
      interval: 200,
      reset: false,
      mobile: false,
      viewFactor: 0.2,
    });

    ScrollReveal().reveal('.hero-text, .skill-text', {
      duration: 1000,
      distance: '30px',
      easing: 'ease',
      origin: 'left',
      interval: 200,
      reset: false,
      mobile: false,
      viewFactor: 0.2,
    });

    ScrollReveal().reveal('.icons', {
      duration: 1000,
      distance: '30px',
      easing: 'ease',
      origin: 'right',
      interval: 200,
      reset: false,
      mobile: false,
      viewFactor: 0.2,
    });

    // const handleOutsideClick = (event) => {
    //   if (divRef.current && !divRef.current.contains(event.target)) {
    //     setOpen(false);
    //   }
    // };

    // document.addEventListener('click', handleOutsideClick);

    // return () => {
    //   document.removeEventListener('click', handleOutsideClick);
    // };

  }, []);

  const handelNavBar = () => {
    setOpen(!open);
  }

  const scrollToHome = () => {
    const contentSection = document.getElementById('home');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProfile = () => {
    const contentSection = document.getElementById('profile');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSkill = () => {
    const contentSection = document.getElementById('skill');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToWeb = () => {
    const contentSection = document.getElementById('others-web');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    const contentSection = document.getElementById('contact');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:vannuwat.suthantip.work@gmail.com'; 
  };


  return (
    <>
      <header>
          <ul className={open ? "nav-bar open" : "nav-bar"}>
            <li><button onClick={scrollToHome}>Home</button></li>
            <li><button onClick={scrollToProfile}>Profile</button></li>
            <li><button onClick={scrollToSkill}>Skills</button></li>
            <li><button onClick={scrollToWeb}>My projects</button></li>
            <li><button onClick={scrollToContact}>Contact</button></li>
          </ul>
        <i onClick={handelNavBar} className={open ? "ri-close-circle-fill" : "bx bx-menu"} id="menu-icon"></i>
      </header>
      <section>
        <div className="hero" id="home">
          <div className="hero-text">
            <h4>Web Developer</h4>
            <h1>Vannuwat Suthantip</h1>
            <p>Programming is my favorite because It always has a problem to solve.<br /> The more problems I confront, the more skills I receive. </p>
            <button onClick={scrollToSkill}>Skills</button>
            <button onClick={scrollToWeb} className="ctaa"><i className="ri-play-fill"></i>My projects</button>
          </div>
          <div className="hero-img-anime"><img src="/design1.png" alt="profile_pic"></img></div>
        </div>
        <div className="profile" id="profile"> 
          <div className="hero-text">
            <h4>Profile</h4>
            <p>I am a fresh graduate at Sirindhorn International Institute of Technology, studying in the computer engineering program, and interested in the front-end developer role.
            </p>
            <p>
              I am always seeking opportunities to practice myself. When I decide to do something, I will dedicate myself to it until the end.           
            </p>
            <p>
            I am a person who can learn and accumulate skills, I can adjust myself to work in different workplaces. I don't limit myself to the role I used to do, I feel free to develop and adapt myself in collaborative work.          
            </p>
          </div>
          <div className="hero-img"><img src="/port_profile.png" alt="profile_pic"></img></div>

        </div>
        <div className="skill" id="skill">
          <div className="skill-text">
            <h4>Languages</h4>
          </div>
          <div className="grid-container-program">
            <div className="grid-item">
            <i class="ri-html5-fill" style={{color: "#e24d25"}}></i>             
             HTML
            </div>
            <div className="grid-item">
            <i class="ri-css3-fill" style={{color: "#1fa5bc"}}></i>
              CSS
            </div>
            <div className="grid-item">
            <i class="ri-javascript-fill" style={{color: '#ba9f27'}}></i>
             Javascript
            </div>
            <div className="grid-item">
            <i class='bx bxl-python' style={{color: "#1fa5bc"}}></i>
            Python
            </div>
          </div>  

          <div className="skill-text">
            <h4>Front-End</h4>
          </div>
          <div className="grid-container-front">
            <div className="grid-item">
            <i class="ri-reactjs-line" style={{color: "#1fa5bc"}}></i>
              React js
            </div>
            <div className="grid-item">
            <i class="ri-bootstrap-fill" style={{color: "#68419C"}}></i>
            Bootstrap
            </div>
            <div className="grid-item">
            <i class='bx bxl-tailwind-css' style={{color: "#1fa5bc"}}></i>
            Tailwind CSS
            </div>
          </div>

          <div className="skill-text">
            <h4>Back-End</h4>
          </div>  
          <div className="grid-container-back">
            <div className="grid-item">
            <i class='bx bxl-nodejs' style={{color: "#3E853F"}}></i>
            Node js
            </div>
            <div className="grid-item">
            <i class='bx bxl-heroku' style={{color: "#581DB3"}}></i>
            Heroku
            </div>
            <div className="grid-item">
            <i class='bx bxl-postgresql' style={{color: "#1fa5bc"}}></i>
            Postgresql
            </div>
          </div>
        </div>
        <div className="others-web" id="others-web">
          <div className="hero-text">
            <h4>My projects</h4>
          </div>
          <div className="grid-container-web">
            <div class="image-container">
              <img src="/others_web.PNG" alt="league of legends"></img>
              <div class="image-overlay">
                <p>React, Tailwind css, video background, animation, and responsive web</p>
                <a href="https://league-legend-demo-h17iy5sgk-vannuwat.vercel.app/" className="ctaa"><i className="ri-play-fill"></i>Visit Website</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact" id="contact">
          <div className="hero-text">
            <h4>Contact</h4>
            <p>Interested in collaborating with me?</p>
            <button onClick={handleMailClick} className="ctaa"><i className="ri-play-fill"></i>Hire me</button>
          </div>
          <div className="hero-img"><img src="/communication.png" alt="talk"></img></div>
        </div>
      </section>
      <div className="icons">
        <a href="https://github.com/vannuwat"><i className='bx bxl-github'></i></a>
        <a href="https://www.youtube.com/@jedivasu9720"><i className="ri-youtube-line"></i></a>
        <a href="https://www.linkedin.com/in/vannuwat-suthantip-a3a002271/"><i className="ri-linkedin-box-line"></i></a>
      </div>
    </>
  );
}

export default App;
