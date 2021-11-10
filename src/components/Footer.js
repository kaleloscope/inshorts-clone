import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className = "footer">
            <span className="name">
                Inshorts clone made by -{" "}
                    <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
                    Sourabh Kalel
                    </a>
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                <a href="https://github.com/kaleloscope" target="__blank">
                <i className="fab fa-github-square fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/kaleloscope/" target="__blank">
                <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="" target="__blank">
                <i className="fas fa-link fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
