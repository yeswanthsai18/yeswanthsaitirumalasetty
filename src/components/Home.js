import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import profileImage from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/w1.jpg"; // Profile image
import petImage from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/Gojo-Background-PNG.png"; // Pet image

function Home() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showPet, setShowPet] = useState(false);

  const roles = [
    "Data Scientist & AI Enthusiast",
    "Turning Data into Insights",
    "Building Scalable Data Pipelines",
    "Harnessing AI for Innovation",
    "Optimizing Data for Business Growth",
    "Predicting Trends with Machine Learning",
    "Crafting Intelligent Systems",
    "Transforming Raw Data into Smart Solutions"
  ];

  const welcomeMessages = [
    "Hello there! 👋",
    "🤖 Step Into My Data Dimension!",
    "Want to see my projects?",
    "Click 'View Portfolio' to begin! 🚀",
    "🔴Nah, I'd Win🔵"
  ];

  useEffect(() => {
    if (pause) {
      setTimeout(() => setPause(false), 2000);
      return;
    }

    const currentRole = roles[index % roles.length];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentRole) {
      setPause(true);
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, pause]);

  // Cycle through welcome messages with a 3-sec gap
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 6000); // 3 sec message, 3 sec gap

    return () => clearInterval(messageTimer);
  }, []);

  // Show pet animation after 1 second delay
  useEffect(() => {
    setTimeout(() => setShowPet(true), 1000);
  }, []);

  const handleViewPortfolio = () => {
    navigate("/about");
  };

  return (
    <section className="home">
      <div className="home-container">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>

        {/* Introduction Card */}
        <div className="intro-card">
          <h1>Hey, I'm Yeswanth Sai Tirumalasetty</h1>
          <h2><span className="typewriter">{text}</span></h2>
          <p className="intro-text">
            Data isn't just numbers; it's the key to unlocking potential, the foundation of informed decisions, 
            and the new language of business. I'm passionate about turning raw data into actionable insights, 
            empowering businesses with data-driven strategies, and providing data-driven solutions for a smarter world. 
            My purpose is to help you see the world through data, unlocking its power for better decisions, 
            because I believe the future is data-driven, and I'm here to help you navigate it.
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button className="btn" onClick={handleViewPortfolio}>View Portfolio</button>
            <a href="/contact" className="btn contact-btn">Contact Me</a>
          </div>
        </div>
      </div>

      {/* Pet Animation and Welcome Messages */}
      {showPet && (
        <div className="pet-container">
          <div className="message-box">{welcomeMessages[messageIndex]}</div>
          <img src={petImage} alt="Pet" className="pet-image" />
        </div>
      )}
    </section>
  );
}

export default Home;
