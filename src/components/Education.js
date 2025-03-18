import React from "react";
import "./Education.css";
import { FaUniversity, FaCalendarAlt, FaStar } from "react-icons/fa";

// Import University Logos
import KentLogo from "/vercel/path0/src/SealAllBlue.jpg";
import AmritaLogo from "/vercel/path0/src/amrita-vishwa-vidyapeetham-logo-png_seeklogo-519922.png";

function Education() {
  const education = [
    {
      degree: "Master's in Computer Science",
      university: "Kent State University",
      logo: KentLogo,
      graduation: "Dec 2024",
      gpa: "3.97 / 4.0",
      major: "Computer Science",
      transcriptLink: "https://drive.google.com/file/d/146s0Vvl6sPaKWlqHulzRsrryPLYpX50f/view?usp=drive_link",
      coursework: [
        "Machine & Deep Learning",
        "Computational Health Informatics",
        "Information Visualization",
        "Data Security & Privacy",
        "Advanced Database System Design",
        "Internet of Things",
        "Big Data Analytics",
        "Design & Analysis of Algorithms",
        "Data Mining Techniques"
      ]
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      university: "Amrita Vishwa Vidyapeetham",
      logo: AmritaLogo,
      graduation: "May 2021",
      gpa: "7.77 / 10",
      major: "Computer Science & Engineering",
      transcriptLink: "https://drive.google.com/file/d/1YuT_DTaXNZwYVgvqRnKluKXc9ur9TGbp/view?usp=drive_link",
      coursework: [
        "Database Management Systems",
        "Machine Learning",
        "Software Engineering",
        "Big Data Analytics",
        "Computer Networks",
        "Operating Systems",
        "Cloud Computing",
        "Data Structures & Algorithms",
        "Theory of Computation",
        "Software Project Management"
      ]
    }
  ];

  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <p className="education-subtitle">A journey through my academic excellence</p>

      <div className="education-container" style={{ marginTop: "30px" }}>
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            {/* University Logo (Centered) */}
            <div className="education-header">
              <img src={edu.logo} alt={`${edu.university} Logo`} className="university-logo" />
            </div>

            {/* Education Details */}
            <div className="education-content">
              <h3 className="degree-title">{edu.degree}</h3>
              <p className="university-name"><FaUniversity /> {edu.university}</p>

              <div className="education-info">
                <p><FaCalendarAlt className="icon" /> <strong>Graduation:</strong> {edu.graduation}</p>
                <p><FaStar className="icon" /> <strong>GPA:</strong> {edu.gpa}</p>
                <p><strong>Major:</strong> {edu.major}</p>
                <a href={edu.transcriptLink} target="_blank" rel="noopener noreferrer" className="transcript-button">
                  View Transcript
                </a>
              </div>

              {/* Relevant Coursework */}
              <h4>Relevant Coursework</h4>
              <div className="coursework">
                {edu.coursework.map((course, i) => (
                  <span key={i} className="course-badge">{course}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
