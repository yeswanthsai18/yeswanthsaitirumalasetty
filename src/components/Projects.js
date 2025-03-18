import React from "react";
import "./Projects.css";

// Import Project Images
import StockPredictionImg from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/Blog - How Home Services Businesses Can Use Chatbots.webp";
import BankingAppImg from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/Blogs_Paytm_Banking-Security.jpg";
import CustomerSegmentationImg from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/Customer-Segmentation-Analysis.jpg";
import HandwrittenEvalImg from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/ocr.webp";
import YoutubeSummarizationImg from "C:/Users/yeswa/OneDrive/Desktop/portfolio/src/sddefault.jpg";

// Project Data
const projects = [
  {
    title: "Digital Assistant for Stock Market Prediction",
    image: StockPredictionImg,
    description: `This project presents a machine learning-powered stock market prediction system 
    that assists investors in making data-driven financial decisions. The assistant utilizes historical 
    stock data, real-time market trends, and deep learning techniques to forecast stock prices with high accuracy.`,
    features: [
      "✔ 91% accuracy in stock price predictions",
      "✔ Real-time data scraping via Selenium",
      "✔ Investment strategy analysis",
      "✔ Published in IEEE Conference"
    ],
    techStack: ["Python", "KNN", "LSTM", "Selenium", "TensorFlow"],
    githubLink: "https://github.com/yeswanthsai18/-A-Digital-Assistant-for-Stock-Market-Prediction",
  },
  {
    title: "Secure Online Banking Application",
    image: BankingAppImg,
    description: `With the increasing risk of financial cyber threats, this project focuses on developing 
    a highly secure online banking application. The system integrates Role-Based Access Control (RBAC) 
    and Multi-Factor Authentication (MFA) to prevent unauthorized access.`,
    features: [
      "✔ Multi-Factor Authentication (MFA) & RBAC",
      "✔ End-to-End Encryption (SSL/TLS & AES)",
      "✔ Real-time fraud detection",
      "✔ Cloud-based deployment via AWS"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "OAuth", "AWS"],
    githubLink: "https://github.com/yeswanthsai18/BeyondPasswordsSecureOnlineBanking",
  },
  {
    title: "Customer Segmentation & Predictive Analysis",
    image: CustomerSegmentationImg,
    description: `Understanding customer behavior is crucial for businesses. This project applies 
    data mining techniques and predictive analytics to segment supermarket customers based on spending behavior.`,
    features: [
      "✔ Advanced segmentation using ML",
      "✔ Predictive modeling for customer retention",
      "✔ Product recommendation & demand forecasting",
      "✔ Fraud detection in shopping behavior"
    ],
    techStack: ["Python", "Scikit-learn", "K-Means", "DBSCAN", "Random Forest"],
    githubLink: "https://github.com/yeswanthsai18/Data_Security_Privacy_KSU",
  },
  {
    title: "Handwritten Expression Evaluation",
    image: HandwrittenEvalImg,
    description: `This project automates mathematical expression evaluation from handwritten inputs using 
    computer vision and deep learning. It processes handwritten mathematical expressions, recognizes symbols, 
    and performs calculations—acting as a digital calculator for handwritten inputs.`,
    features: [
      "✔ Handwritten mathematical expression recognition using deep learning",
      "✔ Image preprocessing techniques for accurate symbol detection",
      "✔ Mathematical parsing engine for complex calculations",
      "✔ User-friendly interface for testing handwritten equations"
    ],
    techStack: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy"],
    githubLink: "https://github.com/yeswanthsai18/Hand-written-expression-evaluation-master",
  },
  {
    title: "YouTube Video Content Analysis & Summarization",
    image: YoutubeSummarizationImg,
    description: `This project automates the extraction, analysis, and summarization of YouTube video content 
    using NLP techniques. It extracts captions, analyzes content, and generates concise summaries.`,
    features: [
      "✔ Automatic transcript extraction from YouTube videos",
      "✔ NLP-powered summarization for quick insights",
      "✔ Sentiment analysis of video content",
      "✔ API for easy integration"
    ],
    techStack: ["Python", "YouTube API", "NLTK", "spaCy", "Transformers"],
    githubLink: "https://github.com/yeswanthsai18/YouTube-Video-Content-Analysis-and-Summarization-Automation",
  }
];

function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <p className="experience-subtitle">A collection of projects showcasing my technical expertise</p>
      <div className="projects-container"style={{ marginTop: "20px" }}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-impact">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
