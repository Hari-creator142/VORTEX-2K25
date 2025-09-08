import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";

const Home = () => {
  useEffect(() => {
    // Particle Background Setup
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const maxParticles = 100;

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    // Initialize Particles
    function init() {
      for (let i = 0; i < maxParticles; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let dx = (Math.random() - 0.5) * 1.5;
        let dy = (Math.random() - 0.5) * 1.5;
        particlesArray.push(new Particle(x, y, dx, dy, size, "#00f9ff"));
      }
    }

    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = dx * dx + dy * dy;
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0, 249, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => p.update());
      connect();
    }

    init();
    animate();

    // Resize Handling
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-container">
      {/* Live Background */}
      <canvas id="particle-canvas"></canvas>

      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-title">VORTEX 2K25</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/team">Our Team</Link></li>
        </ul>
      </nav>

      <section className="hero">
        <h1 className="hero-title">VORTEX 2K25</h1>
        <p className="hero-sub">National Level Technical Symposium</p>
        <p className="hero-college">IETE Students Forum, Mohan Babu University</p>
        <p className="hero-tagline">“Where Ideas Spiral into Innovation”</p>
        
        {/* ✅ Fixed Register Button → redirects to Events page */}
        <Link to="/events">
          <button className="register-button">Register Now</button>
        </Link>

        <section className="aboutus">
          <p>
            VORTEX 2K25 is a National Level Technical Symposium organized by the Passionate and Talented Co-ordinators of IETE, from  ECE Dept, M.B.U.   
            With a blend of innovation, intellect, and inspiration, VORTEX 2K25 aims to bring together tech enthusiasts, creators, problem solvers, and artists from across the country 
            to compete, collaborate and create.  
            <br /><br />
            The symposium features an exciting mix of 10 dynamic events — including 5 high-impact technical challenges like paper presentations, innovation expos, and coding contests; 
            and 5 equally engaging non-technical battles like meme wars, rubik’s cube speed tests, and Number Nexus Games.  
            <br /><br />
            Whether you're here to code in the dark, ignite your imagination, crack puzzles, or lead your squad to victory in e-sports — VORTEX 2K25 is the spiral of innovation 
            you've been waiting for. Welcome aboard the future!
          </p>
        </section>
      </section>
    </div>
  );
};

export default Home;
