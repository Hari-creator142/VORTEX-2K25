import React, { useState } from "react";
import "./../styling/Events.css";
import { Link } from "react-router-dom";
import freefire from "../assets/FF.jpg";
import DD from "../assets/DD.jpg";
import rubrix from "../assets/rubrix.jpg";
import AD from "../assets/AD.jpg";
import ST from "../assets/ST.jpg";
import cp from '../assets/cp.jpg';
import ai from "../assets/ai.jpg";
import es from "../assets/es.jpg";
import nn from "../assets/nn.jpg";
import ncnc from "../assets/ncnc.jpg";
import bms from "../assets/bms.jpg";
import bgmi from "../assets/bgmi.jpg";
import co from "../assets/co.jpg";

const events = {
  technical: [
    {
      title: "AlphaDraft",
      description: "A paper presentation event.",
      image: AD,
      rulesLink: "https://drive.google.com/file/d/1lHn8UaXqlMVjV7Az93UtMMvs-3w4fhw5/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdd0ZuvzcGOmAP7SvMEB-AMqxMQABQg2sYn6ijK3hy_AGPxsQ/viewform?usp=header",
    },
    {
      title: "AI Armageddon",
      description: "War b/w the AI Platforms",
      image: ai,
      rulesLink: "https://drive.google.com/file/d/1MlfOUS0lNefEx7PJd_KEjv-aNsD8mNJ1/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdVX-vpxok7vDfHjqTfdN3OAvy3eNJdjljCbvflZrlDgw1lXw/viewform?usp=header",
    },
    {
      title: "Dark Dev",
      description: "Web/app dev challenge.",
      image: DD,
      rulesLink: "https://drive.google.com/file/d/1xqNRtdqs3ect5zGybqkgU5kDLT88Rxyh/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScGD_WNR91ZYiwjOPDgxPws9W3OV1sxmPLrmZlMpMB_gUsJWw/viewform?usp=header",
    },
    {
      title: "Spark Tank",
      description: "Ignition of the Innovation.",
      image: ST,
      rulesLink: "https://drive.google.com/file/d/1R9ycPGO9PDsUdckyoXNNUZFzTeh3zcSy/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSen4shBh-WS66-7gkJNbZnPGnfkGPv5Fjdy4Jzy_s5mTHhDDg/viewform?usp=header",
    },
    {
      title: "Embedded Synergy",
      description: "Hardware + circuits contest.",
      image: es,
      rulesLink: "https://drive.google.com/file/d/16C4o_jSnQbnSg-IQDHFaX19vBY_XJkaR/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc3GKa5b1I3duKpkbpyZXSDNiJoj5_V0dmTqOEFj4lGf274BA/viewform?usp=header",
    },
  ],
  nonTechnical: [
    {
      title: "Battle of Meme Lords",
      description: "Meme creation & showcase.",
      image: bms,
      rulesLink: "https://drive.google.com/file/d/1NxB8Owc42ZN-XLwqYHYNUUDllVQIZI1l/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdE_9fWPhTPh7Gal_QmsMXwQ8Ggl88XXR9rQOhJKI3wj5onxw/viewform?usp=header",
    },
    {
      title: "Number Nexus",
      description: "Play with your Opponents Mind",
      image: nn,
      rulesLink: "https://drive.google.com/file/d/10r5i9XvbQ98zh7jKfHvjqvCwIjZngYy3/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSemUfI7C72sQ-Lkmke3sDLh_UZgEhtn1FlgiYyaED2BAtlZHQ/viewform?usp=header",
    },
    {
      title: "Naa Cinema Naa Choice",
      description: "TFI Challenges",
      image: ncnc,
      rulesLink: "https://drive.google.com/file/d/1c5Gvu6jxehcPycAtANuShEPbbodaIe9X/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMxvPUIJeeFOFyDrUZ3xfpIqMtODGbB_qMhYYCXb76jwCazA/viewform?usp=header",
    },
    {
      title: "Cupstruction Chaos",
      description: "Paper Cup Engineering",
      image: cp,
      rulesLink: "https://drive.google.com/file/d/1XNY3EMKbQFAoJgZmpt0_EDs7l4XGQeAV/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScJOIO9SHF1U7hUqVVlgv3UNPDYY1tn803uoAsEDfn1rP1-rg/viewform?usp=header",
    },
    {
      title: "Rubik's Rumble",
      description: "Rubrix Cube Challenge.",
      image: rubrix,
      rulesLink: "https://drive.google.com/file/d/1PDSTQVKglpxTaHbdtKppvKDrF1DRzhGr/view?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSebsvgHEqB2DD9U5yqXPQx5tLPHcMt7GDu0eZdkHEZX78GlXg/viewform?usp=header",
    },
  ],
  eSports: [
    {
      title: "BGMI Battle",
      description: "Squads, zones, survival!",
      image: bgmi,
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScCcQN4Bw_6WrcjMnysjcwjSPe5bN0pjutRmVFW1LybKv9iZA/viewform?usp=header",
    },
    {
      title: "Free Fire Blaze",
      description: "Mobile FPS showdown.",
      image: freefire,
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScCcQN4Bw_6WrcjMnysjcwjSPe5bN0pjutRmVFW1LybKv9iZA/viewform?usp=header",
    },
    {
      title: "Combo Offers",
      description: "Your Path way to multiple events",
      image: co,
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf-fw5zdZ3k1GBF6Tc8Mc_KmN1G9zOLe8bOqtbYn2quoEApeQ/viewform?usp=header",
    },
  ],
};

const tabLabels = {
  technical: "Technical",
  nonTechnical: "Non-Technical",
  eSports: "E-Sports & Combo Offers",
};

const Events = () => {
  const [selectedTab, setSelectedTab] = useState("technical");

  return (
    <div className="events-page">
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

      <h1 className="events-heading">Events</h1>

      <div className="event-tabs">
        {Object.keys(tabLabels).map((tab) => (
          <button
            key={tab}
            className={`event-tab ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      <div className="event-grid">
        {events[selectedTab].map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ title, description, image, rulesLink, registerLink }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      {/* Front Side */}
      <div className="flip-card-front">
        <img src={image} alt={title} />
      </div>

      {/* Back Side */}
      <div className="flip-card-back">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="event-buttons">
          {/* More Details → Google Drive PDF */}
          <a href={rulesLink} target="_blank" rel="noopener noreferrer">
            <button className="details-btn">More Details</button>
          </a>
          {/* Register Now → Google Form */}
          <a href={registerLink} target="_blank" rel="noopener noreferrer">
            <button className="register-btn">Register Now</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Events;
