import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import thumbnail from "./imgs/thumbnail.png";
import { Link } from 'react-router-dom'
import './Header.css'

 const Header = () => {
  const particlesInit = async (main) => {
    console.log(main);

  await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    // code for Header Welcome Text
    <div id='particles-js'>
       <div className='box'>
      <img src={thumbnail} alt="" id='thumbnail-img'/>
       <span>

        <h4>Department of Chemical Engineering</h4>
        <p>Brings to you</p>
       </span>
          <h1>Chemical Event's Name</h1>
        <Link id='Register-btn' to='/registration'>Register Now</Link>
        </div>
        <div>

        {/* Code for Linked Particles Effect */}
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2%3,
            straight: false,
            
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  
    </div>
    </div>
  )
}
console.log(Particles.speed);
export default Header
