import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const NAME = 'Murat Oney';


const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [typedName, setTypedName] = useState("");

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
          setTypedName(NAME.slice(0, current + 1));
          current++;
          if (current === NAME.length) clearInterval(interval);
        }, 150); // typing speed in ms
        return () => clearInterval(interval);
      }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        setIsSubmitting(true);
        
        // Send to Formspree
        fetch('https://formspree.io/f/xqabykvl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Thank you for your message! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Sorry, there was an error sending your message. Please try again.');
            }
            setIsSubmitting(false);
        })
        .catch(error => {
            alert('Sorry, there was an error sending your message. Please try again.');
            setIsSubmitting(false);
        });
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>Hello, my name is</h2>
                        <h1 className="typewriter">
                            {typedName}
                            <span className="typewriter-cursor">|</span>
                        </h1>
                        <p className="hero-subtitle">CS Graduate & Software Developer</p>
                        <p className="hero-description">
                        I recently earned my B.S. in Computer Science from California Polytechnic State University. With 4+ years of hands-on coding experience, I’m driven by a passion for building innovative, impactful software solutions.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/projects" className="btn btn-primary">View My Projects</Link>
                            <Link to="/photography" className="btn btn-secondary">See My Photos</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="container">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I'm a dedicated developer with a passion for creating meaningful and innovative software solutions. 
                                My journey in technology has led me to work on various projects that challenge me to think creatively 
                                and solve complex problems. 
                            </p>
                            <p>
                            Outside of coding, I enjoy staying active at the gym, capturing moments through photography, and occasionally trying out new recipes in the kitchen. Whether I'm debugging code or baking sourdough, I’m always curious and looking for new ways to challenge myself.
                            </p>
                            <div className="skills">
                                <h3>Skills & Technologies</h3>
                                <div className="skill-tags">
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">HTML/CSS</span>
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">Photography</span>
                                    <span className="skill-tag">Photo Editing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="contact">
                <div className="container">
                    <h2>Get In Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <a
                                className="contact-item"
                                href="mailto:muoney01@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h3>Email</h3>
                                    <p>muoney01@gmail.com</p>
                                </div>
                            </a>
                            <a
                                className="contact-item"
                                href="https://www.linkedin.com/in/murat-oney"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i>
                                <div>
                                    <h3>LinkedIn</h3>
                                    <p>linkedin.com/in/murat-oney</p>
                                </div>
                            </a>
                            <a
                                className="contact-item"
                                href="https://github.com/muratoney"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i>
                                <div>
                                    <h3>GitHub</h3>
                                    <p>github.com/muratoney</p>
                                </div>
                            </a>
                        </div>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 