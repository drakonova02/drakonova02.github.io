import React from "react";
import '../style/Resume.css';
import resume from '../image/resume.jpg'
import cv from "../utilities/CV_Junior_MarkUp_Developer_Drakonova.pdf"

export default () => {
    return (
        <div className="main resume">
            <div className="resume-info">
                <h1>Alesia Drakonova</h1>
                <div className="personal-info">
                    <div>
                        <h3>Personal information:</h3>

                        <p><strong>Date of birth: </strong>30.12.2002</p>
                        <p><strong>City: </strong>Kharkiv, Ukraine</p>
                        <p><strong>Phone: </strong>+380993250116</p>
                        <p><strong>Telegram: </strong>@dragon_02AAD</p>
                        <p><strong>E-mail: </strong>drakonova02@gmail.com</p>
                        <p><strong>LinkedIn: </strong>linkedin.com/in/alesia-drakonova-b7921018a</p>
                        <p><strong>GitHub: </strong>https://github.com/drakonova02</p>

                    </div>
                    <picture>
                        <img src={resume}/>
                    </picture>
                </div>
                <p><strong>Career objective: </strong>Looking for a job as a Junior Front End Developer</p>
                <div className="summary">
                    <p><strong>Summary:: </strong>I have commercial experience in creating websites.</p>
                    <p><strong>Technologies used: </strong>HTML5, CSS3.</p>
                    <p>I would like to invite you to review some projects in my portfolio:</p>
                    <ul>
                        <li><a href="https://github.com/drakonova02/HTML-CSS-example-1">https://github.com/drakonova02/HTML-CSS-example-1</a></li>
                        <li><a href="https://github.com/drakonova02/MarkUp-example-2">https://github.com/drakonova02/MarkUp-example-2</a></li>
                        <li><a href="https://github.com/drakonova02/MarkUp-example-3">https://github.com/drakonova02/MarkUp-example-3</a></li>
                    </ul>
                </div>
                <div className="hard">
                    <h3>Hard Skills:</h3>
                    <ul>
                        <li>HTML5/CSS3;</li>
                        <li>Git;</li>
                        <li>JavaScript;</li>
                        <li>JQuery</li>
                        <li>Photoshop/ Figma / Avocode</li>
                        <li>Сompliance with W3C standards, semantic layout</li>
                        <li>PixelPerfect</li>
                        <li>SCSS/SASS, LESS;</li>
                        <li>Responsive web design;</li>
                        <li>Work with Magento 2;</li>
                        <li>Designing emails;</li>
                        <li>Tabular layout;</li>
                        <li>Flexbox;</li>
                        <li>Grid;</li>
                        <li>Ability to work with PageBuilder (Magento 2/ WordPress);</li>
                    </ul>
                </div>
                <div className="work">
                    <h3>Work Experience:</h3>
                    <p>10.2021 – till now</p>
                    <strong>Ronis, Junior Front-end Developer (Magento 2)</strong>
                </div>
                <div className="edu">
                    <h3>Education: </h3>
                    <p><strong>2020</strong>,  Kharkiv National University of Radioelectronics, Computer Science, PE</p>
                </div>
                <div className="edu">
                    <h3>Additional education: </h3>
                    <p><strong>2021</strong>, Front End Basic course at Hillel IT-school</p>
                    <p><strong>2020</strong>, Introduction in programming C++ at stepic.org</p>
                </div>
                <div className="soft">
                    <h3>Soft Skills:</h3>
                    <ul>
                        <li>Fast learner;</li>
                        <li>Adaptability;</li>
                        <li>Self-organized;</li>
                        <li>Аbility to work overtime;</li>
                        <li>Worked on high-load projects;</li>
                        <li>Result oriented.</li>
                    </ul>
                </div>
                <p><strong>Additional information: </strong>English – Preintermediate.</p>
                <p><strong>Hobbies: </strong>cooking, reading books, beading, math.</p>
            </div>
            <a href={cv} className="primary-button">Download CV</a>
        </div>
    )
}