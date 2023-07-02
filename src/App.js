import './App.css';
import ScrollReveal from 'scrollreveal';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    ScrollReveal().reveal('.logo', slideUp);

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.nav-bar');

    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('open');
    }

  }, []);

  var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
  };


  return (
    <>
      <header>
        <a href="#" class="logo">Clash of Clans</a>
          <ul className="nav-bar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Clans</a></li>
            <li><a href="#">Town hall</a></li>
            <li><a href="#">Troops</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        <div class="bx bx-menu" id="menu-icon"></div>
      </header>
      <section class="hero">
          <div class="hero-text">
            <h5>#2 Trending</h5>
            <h4>Lead SuperCell</h4>
            <h1>GOBLINS</h1>
            <p>Join millions of players worldwide as you build your village, <br /> raise a clan, and competein epic Clan Wars!! </p>
            <a href="#">Compare</a>
            <a href="#" class="ctaa"><i class="ri-play-fill"></i>Watch Gameplay</a>
          </div>
          <div class="hero-img"><img src="/goblin.png" alt="goblin"></img></div>
      </section>
      <div class="icons">
        <a href="#"><i class="ri-instagram-line"></i></a>
        <a href="#"><i class="ri-youtube-line"></i></a>
        <a href="#"><i class="ri-linkedin-box-line"></i></a>
      </div>
      <div class="scroll-down">
        <a href="#"><i class="ri-arrow-down-s-fill"></i></a>
      </div>
    </>
  );
}

export default App;
