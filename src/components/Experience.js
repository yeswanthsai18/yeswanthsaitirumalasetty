import React from "react";
import "./Experience.css";
import { FaCalendarAlt } from "react-icons/fa"; 

// Import Company Logos
import TCSLogo from "/vercel/path0/src/download.png";
import DatapointLogo from "/vercel/path0/src/Datapoint.jpg";
import VerzeoLogo from "/vercel/path0/src/components/1453553-1566207284806-7620.webp";

function Experience() {
  const experiences = [
    {
      role: "Systems Engineer | Data Analyst",
      company: "Tata Consultancy Services (Thomson Reuters)",
      location: "Bengaluru, India",
      dates: "July 2021 – Jan 2023",
      logo: TCSLogo, 
      details: [
        "Led data integration for Salesforce CRM, SAP ECC, SAP S/4HANA, ensuring 99.9% data accuracy.",
        "Conducted analytics on structured/unstructured datasets using Python, Informatica, and Alteryx, improving data consistency by 35%.",
        "Automated anomaly detection workflows, enhancing data compliance by 45%.",
        "Designed ETL pipelines, accelerating data retrieval by 40% and increasing query efficiency by 25%.",
        "Developed SQL optimization techniques, reducing query execution time by 40%."
      ],
      skills: ["ETL", "Data Analytics", "SQL", "Python", "Salesforce"],
    },
    {
      role: "Data Science Intern",
      company: "Datapoint Info Solutions",
      location: "Remote",
      dates: "April 2020 – May 2021",
      logo: DatapointLogo,
      details: [
        "Built machine learning models for anomaly detection, customer segmentation, and demand forecasting, improving predictive accuracy by 28%.",
        "Engineered fraud detection frameworks (Random Forest, XGBoost) with 92% accuracy.",
        "Developed deep learning models for image classification & NLP sentiment analysis.",
        "Created a recommendation system, increasing user engagement by 35%."
      ],
      skills: ["Machine Learning", "Deep Learning", "Fraud Detection", "NLP", "Python"],
    },
    {
      role: "Business Analytics Intern",
      company: "Verzeo Tech",
      location: "Remote",
      dates: "Jan 2020 – Mar 2020",
      logo: VerzeoLogo,
      details: [
        "Conducted exploratory data analysis (EDA), improving forecasting accuracy by 20%.",
        "Developed predictive regression models, enhancing decision-making with Logistic Regression, SVM, and Random Forest.",
        "Designed Tableau dashboards, reducing data processing time by 30%.",
        "Automated data extraction, transformation, and reporting using Python & SQL, reducing manual effort by 25%."
      ],
      skills: ["Data Analytics", "EDA", "Predictive Modeling", "Tableau", "Python"],
    }
  ];

  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <p className="experience-subtitle">A journey through my professional growth and contributions</p>

      <div className="experience-container" style={{ marginTop: "-10px" }}>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <img src={exp.logo} alt={`${exp.company} Logo`} className="company-logo" />
            <div className="experience-content">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{exp.role}</h3>
                  <p>{exp.company}</p>
                </div>
                <div className="experience-dates">
                  <FaCalendarAlt /> {exp.dates}
                </div>
              </div>
              <ul className="experience-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <div className="experience-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
