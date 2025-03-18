import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaShareAlt, FaGithub, FaLinkedin, FaInstagram, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import emailjs from "emailjs-com";
import clipboardIcon from "/vercel/path0/src/cpy.png"; // Import clipboard icon
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState(""); // Success/Error Message
  const [loading, setLoading] = useState(false); // Loading effect
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Copy Email to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("yeswanth1809@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate Email Format
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle Form Submission via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate Inputs
    let newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required.";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required.";
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true); // Show loading effect

    emailjs.send(
      "service_9o4nq07",   // Replace with your EmailJS Service ID
      "template_ls79998",  // Replace with your EmailJS Template ID
      formData,
      "iTGFFZYLN1BcpUk8q"  // Replace with your EmailJS User ID
    )
    .then((result) => {
      console.log("Success:", result.text);
      setFormStatus("✅ Message Sent Successfully!");
      setLoading(false);

      // Clear Form after 3 seconds
      setTimeout(() => {
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        setFormStatus("");
      }, 3000);
    })
    .catch((error) => {
      console.log("Error:", error.text);
      setFormStatus("❌ Failed to Send Message");
      setLoading(false);
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">CONTACT ME</h2>

        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-details">
              <h3>My Address</h3>
              <p>Kent, OH, United States</p>
            </div>
          </div>

          <div className="contact-card">
            <FaShareAlt className="contact-icon" />
            <div className="contact-details">
              <h3>Social Profiles</h3>
              <div className="social-icons">
                <a href="https://github.com/yeswanthsai18" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yeswanth-sai-tirumalasetty/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/yeswanthbobby18/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <h3>Email Me</h3>
              <p className="email-text">
                yeswanth1809@gmail.com
                <span className="clipboard-container" onClick={copyToClipboard}>
                  {copied ? (
                    <FaCheckCircle className="copied-icon" />
                  ) : (
                    <img src={clipboardIcon} alt="Copy" className="clipboard-icon" />
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-container">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            {errors.user_name && <span className="error-message"><FaTimesCircle /> {errors.user_name}</span>}
          </div>
            
          <div className="input-container">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            {errors.user_email && <span className="error-message"><FaTimesCircle /> {errors.user_email}</span>}
          </div>

          <div className="input-container">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && <span className="error-message"><FaTimesCircle /> {errors.subject}</span>}
          </div>

          <div className="input-container">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <span className="error-message"><FaTimesCircle /> {errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {formStatus && (
            <div className={`form-status ${formStatus.includes("✅") ? "success-message" : "error-message"}`}>
              {formStatus.includes("✅") ? <FaCheckCircle className="status-icon" /> : <FaTimesCircle className="status-icon" />}
              <span>{formStatus.replace("✅", "").replace("❌", "").trim()}</span>
            </div>
          )}
        </form>

        {/* Portfolio Project Link Section */}
        <div className="portfolio-project">
          <p>Check out my <span className="highlight">React & Node Portfolio</span> project on GitHub:</p>
          <a href="https://github.com/yeswanthsai18/portfolio-website" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
