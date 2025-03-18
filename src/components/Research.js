import React from "react";
import "./Research.css";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaBook } from "react-icons/fa";

// Import Research Images
import ResearchImage from "/vercel/path0/src/stock.png";
import ResearchResult1 from "/vercel/path0/src/res2.png";
import ResearchResult2 from "/vercel/path0/src/res1.png";

function Research() {
  return (
    <section className="research">
      <h2 className="section-title">Publication</h2>
      <p className="research-subtitle">
        Exploring the intersection of AI-driven stock market prediction through cutting-edge research.
      </p>

      <div className="research-container">
        <div className="research-card">
          {/* Research Image (Now inside a styled container) */}
<div className="research-image-container"style={{ marginTop: "-20px" }}>
    <img src={ResearchImage} alt="Stock Market Prediction" className="research-top-image" />
</div>

          {/* Research Title */}
          <h3 className="research-title" style={{ marginTop: "10px" }}>A Digital Assistant for Stock Market Prediction</h3>
          <hr className="divider" />

          {/* Research Details Grid */}
          <div className="research-details"style={{ marginTop: "10px" }}>
            <div className="detail-box">
              <FaUsers className="icon" />
              <p><span className="detail-heading">Authors:</span> Yeswanth Sai Tirumalasetty, Ajith Pai, Y V Sravan Kumar reddy, M Sai Surya Teja</p>
            </div>
            <div className="detail-box">
              <FaBook className="icon" />
              <p><span className="detail-heading">Conference:</span> 2021 IEEE International Conference on Computer Communication and Informatics (ICCCI)</p>
            </div>
            <div className="detail-box">
              <FaMapMarkerAlt className="icon" />
              <p><span className="detail-heading">Location:</span> Palladam, India</p>
            </div>
            <div className="detail-box">
              <FaCalendarAlt className="icon" />
              <p><span className="detail-heading">Date:</span> 11 November 2021</p>
            </div>
          </div>

          {/* Abstract Section */}
          <div className="research-abstract"style={{ marginTop: "-20px" }}>
            <h4 className="abstract-heading">📘 Abstract</h4>
            <p>
              This research presents a machine learning-powered stock market prediction system that assists investors in making data-driven financial decisions. 
              The assistant utilizes historical stock data, real-time market trends, and deep learning techniques to forecast stock prices with high accuracy. 
              The model integrates K-Nearest Neighbors (KNN) and Long Short-Term Memory (LSTM) networks to capture short-term and long-term dependencies in stock prices. 
              By incorporating Selenium-based web scraping, the assistant dynamically collects real-time stock prices, news articles, and economic indicators to refine its predictions. 
              The system enhances investment strategies by providing AI-powered recommendations, anomaly detection, and financial insights.
            </p>
          </div>

          {/* Research Results Section */}
<h4 className="research-results-heading">Research Results</h4>
<div className="research-results">
    <div className="result-box">
        <img src={ResearchResult1} alt="Research Result 1" className="result-image" />
        <p className="result-text">Stock Prediction Output Sample</p>
    </div>
    <div className="result-box">
        <img src={ResearchResult2} alt="Research Result 2" className="result-image" />
        <p className="result-text">Stock Market Trend Analysis from Our Model</p>
    </div>
</div>

          {/* Research Topics (Similar to Coursework) */}
          <h4 className="related-topics">Relevant Research Topics</h4>
          <div className="research-tags">
            <span className="tag">Deep Learning</span>
            <span className="tag">Stock Market Prediction</span>
            <span className="tag">LSTM</span>
            <span className="tag">KNN</span>
            <span className="tag">Selenium</span>
            <span className="tag">Financial Analytics</span>
            <span className="tag">Investment Strategies</span>
            <span className="tag">Big Data</span>
            <span className="tag">Algorithmic Trading</span>
            <span className="tag">Neural Networks</span>
          </div>

          {/* View Publication Button */}
          <a href="https://ieeexplore.ieee.org/document/9640981" target="_blank" rel="noopener noreferrer" className="publication-button">
            Access Research Paper
          </a>
        </div>
      </div>
    </section>
  );
}

export default Research;
