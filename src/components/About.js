import React from "react";
import "./About.css";
import aboutImage from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/Yeswanth photo.jpg"; // Ensure correct path
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaDownload } from "react-icons/fa"; // Added download icon

function About() {
  return (
    <section className="about">
      <h2 className="section-title" style={{ marginTop: "60px" }}>YESWANTH SAI TIRUMALASETTY</h2>

      {/* About Container */}
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={aboutImage} alt="Profile" />
        </div>

        {/* Resume Button (Centered) */}
        <div className="resume-container">
        <a 
  href="https://drive.google.com/file/d/1khiBy7wgSOyNXvwz1cHhckyQgU8lL3e1/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
  className="resume-button"
>
  <FaDownload className="icon" /> <span>Download Resume</span>
</a>

        </div>

        {/* Information Cards in Second Line */}
        <div className="about-details"style={{ marginTop: "-20px" }}>
          <div className="info-card"><FaMapMarkerAlt className="icon" /> <span>Kent, OH, United States</span></div>
          <div className="info-card">
            <FaEnvelope className="icon" />
            <a href="mailto:yeswanth1809@gmail.com">yeswanth1809@gmail.com</a>
          </div>
          <div className="info-card"><FaPhone className="icon" /> <span>+1 3305546629</span></div>
        </div>
      </div>

      {/* About Bio Section */}
      <div className="about-bio">
        <p>
          Driven by a strong passion for data science, I have cultivated 3 years of hands-on experience 
          in data analytics, data engineering, and machine learning. My professional journey is fueled 
          by a desire to transform complex data into impactful solutions, a fascination sparked in my 
          childhood by a love for solving intricate puzzles and understanding the logic behind them. 
        </p>
        <p>
          This early curiosity evolved into a professional pursuit, and I find immense satisfaction in 
          building efficient data pipelines and developing machine learning models that automate 
          processes and provide actionable insights. I am adept at building and optimizing data pipelines, 
          ETL workflows, and data architectures, leveraging technologies such as Python, SQL, PySpark, 
          and cloud platforms (AWS, Azure).
        </p>
        <p>
          I am particularly enthusiastic about applying machine learning frameworks (TensorFlow, 
          Keras, Scikit-learn) to develop predictive analytics, anomaly detection, and recommendation 
          systems that drive business intelligence. Beyond technical proficiency, I am committed to 
          continuous learning and seek opportunities to contribute to innovative, data-driven initiatives.
        </p>

        {/* Key Skills Section */}
        <div className="highlights-section">
          <h3>Key Skills and Expertise:</h3>
          <ul>
            <li>Proficient in Python, SQL, PySpark, Apache Hadoop, and cloud computing platforms (AWS, Azure) for scalable data solutions.</li>
            <li>Experienced in building and optimizing high-performance data pipelines and ETL workflows.</li>
            <li>Skilled in applying machine learning frameworks (TensorFlow, Keras, Scikit-learn) and NLP techniques for predictive analytics, anomaly detection, and recommendation systems.</li>
            <li>Adept in feature engineering, statistical modeling, and data mining to transform complex datasets into actionable insights.</li>
          </ul>
        </div>

        {/* Highlights Section */}
        <div className="highlights-section">
          <h3>Highlights:</h3>
          <ul>
            <li>Proven ability to enhance data quality, streamline operations, and drive business intelligence through data-driven solutions.</li>
            <li>Experienced in leading data migration projects and optimizing ETL pipelines.</li>
            <li>Strong commitment to data governance, security, and compliance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
