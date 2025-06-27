import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "A responsive personal website built with HTML, CSS, and JavaScript. Features include smooth animations, mobile navigation, and contact form functionality.",
            technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
            icon: "fas fa-code",
            githubLink: "#",
            liveLink: "#"
        },
        {
            id: 2,
            title: "Cal Poly Device Decomissioning",
            description: "Led project planning with a focus on scalability. Built a Power Apps interface, optimized SharePoint processes, automated workflows, and managed decommissioning of 1,000+ devices quarterly.",
            technologies: ["Power Apps", "Power Automate", "Sharepoint", "Jira"],
            icon: "fas fa-mobile-alt",
            githubLink: "#",
            liveLink: "#"
        },
        {
            id: 3,
            title: "Cal Poly ITS Chatbot",
            description: "Collaborated in a team of three to design and deploy a chatbot for Cal Poly ITS. Used TF-IDF and OpenAI's API to generate accurate, document-based responses. Built and integrated the algorithm into a Flask web application with a user-friendly and accessible interface.",
            technologies: ["Python", "TF-IDF", "OpenAi API", "Flask"],
            icon: "fas fa-robot",
            githubLink: "#",
            liveLink: "#"
        },
        {
            id: 4,
            title: "Car Identifier AI-based Web App",
            description: "Developed an AI model using the Stanford Car dataset to identify car models and years from images. Collaborated in a team of four via GitHub to build a responsive web app for car identification. Achieved 87% accuracy through training and fine-tuning custom model architectures.",
            technologies: ["Python", "Pytorch", "React"],
            icon: "fas fa-robot",
            githubLink: "#",
            liveLink: "#"
        },
        {
            id: 5,
            title: "Gym Social Media Web App",
            description: "Created a gym-focused social media web app for Cal Poly students. Containerized the app with Docker and collaborated using GitHub and scrum methodologies, including sprints, to enhance teamwork and project management.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Docker", "GitHub", "Scrum", "Prisma"],
            icon: "fas fa-laptop-code",
            githubLink: "#",
            liveLink: "#"
        },
        {
            id: 6,
            title: "Minecraft Java Mod",
            description: "Developed a Minecraft mod featuring custom blocks, items, and entities to enhance gameplay. Utilized the Minecraft Fabric and Forge modding framework to ensure stability and full compatibility with the base game. Focused on clean code structure, modular design, and smooth integration within the existing game environment.",
            technologies: ["Java", "Minecraft", "Gradle", "IntelliJ", "Fabric", "Forge"],
            icon: "fas fa-gamepad",
            githubLink: "#",
            liveLink: "#"
        }
    ];

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "JavaScript", "Java", "C/C++", "SQL"]
        },
        {
            title: "Web Technologies",
            skills: ["HTML5", "CSS3", "React", "Node.js", "Express"]
        },
        {
            title: "Data Science & ML",
            skills: ["Pandas", "NumPy", "TensorFlow", "Jupyter", "Pytorch"]
        },
        {
            title: "Databases & Tools",
            skills: ["PostgreSQL", "Git", "Docker", "Power Apps", "Power Automate", "Power BI", "Power Point", "Jira", "Sharepoint", "Scrum", "Prisma"]
        }
    ];

    return (
        <div className="projects-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>My Projects</h1>
                    <p>Here are some of the coding projects I've worked on. Each project represents a unique challenge and learning experience.</p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects">
                <div className="container">
                    <div className="projects-grid">
                        {projects.map(project => (
                            <div key={project.id} className="project-card">
                                <div className="project-image">
                                    <i className={project.icon}></i>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <div className="container">
                    <h2>Technical Skills</h2>
                    <div className="skills-categories">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="skill-category">
                                <h3>{category.title}</h3>
                                <div className="skill-tags">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects; 