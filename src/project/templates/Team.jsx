import React from "react";
import "../styling/team.css";
import "../styling/Info.css";
import { Link } from "react-router-dom";

// Senior Team Imports
import hari from "../assets/hari.png";
import gowtham from "../assets/gowtham.jpg";
import jathin from "../assets/jathin.jpg";
import yashwanth from "../assets/yashwanth.jpg";
import venkat from "../assets/venakt.jpg";
import Varshi from "../assets/Varshi.jpg";
import saif from "../assets/saif.jpg";
import prudhvi from "../assets/prudhvi.jpg";
import nandhini from "../assets/nandhini.jpg";
import kovida from "../assets/kovida.jpg";
import Harsitha from "../assets/Harsitha.jpg";
import bhargavi from "../assets/bhargavi.jpg";
import bhargava from "../assets/bhargava.jpg";
import moksha from "../assets/moksha.jpg";
import Deepika from "../assets/Deepika.jpg";
import bindu from "../assets/bindu.jpg";
import navya from "../assets/navya.jpg";
import manoj from "../assets/manoj.jpg";
import naveen from "../assets/naveen.jpg";
import chaitanya from "../assets/chaitanya .jpg";
import bheem from "../assets/bheem.jpg";
import vidya from "../assets/vidya.png";
import chathur from "../assets/chathur.jpg";
import abhi from "../assets/abhi.jpg";
import rishika from "../assets/rishika.jpg";
import gopal from "../assets/gopal.jpg";
import ach from "../assets/ach.jpg";
import ash from "../assets/ash.jpg";
import dileep from "../assets/dileep.jpg";
import hema from "../assets/hema.jpg";
import indu from "../assets/indu.jpg";
import jitesh from "../assets/jitesh.jpg";
import josh from "../assets/josh.jpg";
import mammu from "../assets/mammu.jpg";
import mad from "../assets/mad.jpg";
import nageshwari from "../assets/nageshwari.jpg";
import pav from "../assets/pav.jpg";
import kp from "../assets/kp.jpg";
import tulasi from "../assets/tulasi.jpg";
import mouni from "../assets/mouni.jpg";



// Junior Placeholder Import
// Senior Members
const teamMembers = [
  { name: "Navya", role: "Chair Person", image: navya },
  { name: "Jathin", role: "Vice Chair", image: jathin },
  { name: "Moksha", role: "Secretary", image: moksha },
  { name: "Gowtham", role: "Joint Secretary", image: gowtham },
  { name: "Harinath", role: "Technical Lead", image: hari },
  { name: "Bhargava", role: "Community Manager", image: bhargava },
  { name: "Deepika", role: "Finance", image: Deepika },
  { name: "Hima Bindu", role: "Publicity", image: bindu },
  { name: "Yaswanth", role: "Publicity", image: yashwanth },
  { name: "Bhargavi Bai", role: "Publicity", image: bhargavi },
  { name: "Varshitha", role: "Publicity", image: Varshi },
  { name: "Harshitha", role: "Documentation", image: Harsitha },
  { name: "Prudhvi", role: "Documentation", image: prudhvi },
  { name: "Mahammad Saif", role: "Documentation", image: saif },
  { name: "Chinna Venkat", role: "Documentation", image: venkat },
  { name: "Kovida", role: "Operations", image: kovida },
  { name: "Manoj Kumar", role: "Operations", image: manoj },
  { name: "Nandini", role: "Operations", image: nandhini },
  { name: "Naveen", role: "Operations", image: naveen },
];

// Junior Members (21 Members)
const juniorMembers = [
  { name: "Chaithanya", role: "Promotions", image: chaitanya },
  { name: "Navya", role: "Operations", image: bheem },
  { name: "Vidya Charan", role: "Promotions", image: vidya },
  { name: "Chathur", role: "Operations", image: chathur },
  { name: "Abhijithi", role: "Documentation", image: abhi },
  { name: "Rishika", role: "Promotions", image: rishika },
  { name: "Ram Gopal", role: "Operations", image: gopal },
  { name: "Achyuth", role: "Promotions", image: ach },
  { name: "Ashreetha", role: "Operations", image: ash },
  { name: "Dileep", role: "Documentation", image: dileep },
  { name: "Hema", role: "Documentation", image: hema },
  { name: "Indu", role: "Operations", image: indu },
  { name: "Jitesh Reddy", role: "Operations", image: jitesh},
  { name: "Jyoshna", role: "Documentation", image: josh },
  { name: "Mamatha", role: "Documentation", image: mammu },
  { name: "Madhuri", role: "Promotions", image: mad },
  { name: "Nageshwari", role: "Documentation", image: nageshwari },
  { name: "Pavani", role: "Promotions", image: pav },
  { name: "Krishna Priya", role: "Documentation", image: kp },
  { name: "Rama Tulasi", role: "Documentation", image: tulasi},
  { name: "Mounika", role: "Promotions", image: mouni },
];

const Team = () => {
  return (
    <div className="info-page">
      {/* Navbar */}
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

      {/* Senior Team */}
      <h1 className="info-heading">Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      {/* Junior Team Scrolling */}
      <h1 className="info-heading">Our Junior Coordinators</h1>
      <div className="juniors-container">
        <div className="juniors-track">
          {juniorMembers.map((junior, index) => (
            <div key={index} className="juniors-card">
              <img src={junior.image} alt={junior.name} />
              <h3>{junior.name}</h3>
              <p>{junior.role}</p>
            </div>
          ))}
          {juniorMembers.map((junior, index) => (
            <div key={`dup-${index}`} className="juniors-card">
              <img src={junior.image} alt={junior.name} />
              <h3>{junior.name}</h3>
              <p>{junior.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
