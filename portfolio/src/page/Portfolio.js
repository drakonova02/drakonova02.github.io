import React from "react";
import '../style/Portfolio.css';
import speaky from '../image/speaky.png';
import cloud from '../image/cloud.png';
import konstruct from '../image/konstruct.png';
import trust from '../image/trust.png';

const projectArray = [
    {image: speaky,     title: "Speaky School", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "https://github.com/drakonova02/MarkUp-example-2"},
    {image: cloud,      title: "CLOUDBUDGET",   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "https://github.com/drakonova02/HTML-CSS-example-1"},
    {image: konstruct,  title: "Konstruct",     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#"},
    {image: trust,      title: "Trust Active",  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "https://github.com/drakonova02/MarkUp-example-3"},
]

export default () => {
    return (
        <div className="main portfolio">
            <h1>Portfolio</h1>

            <ul className="wrapper-portfolio">
            { projectArray.map(elem => {
                return (
                    <li>
                    <div className="project-content">
                        <picture>
                            <img src={elem.image}/>
                        </picture>
                        <div>
                            <h3>{elem.title}</h3>
                            <p>{elem.description}</p>
                            <a className="github-link" href={elem.link}>
                                <svg className="git-social" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5T1376 1664h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 492 446q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"/></svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="technologies">
                        <p>Technologies:</p>
                        <div>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.5"><path d="M10.4 126.9 0 0l124 .3-11 126.6-50.5 14.6z" fill="#e34f26"/><path d="M62.5 129.3V12l51 .2-9 104.8z" fill="#ef652a"/><path d="m99.5 41.4 1.4-15.5H22.4l4.3 47.5H81l-2 20.2-17.5 4.7-17.6-5.1-.9-12H27.3l2.1 24.6 32 9 32.3-9L98 57.6H41.1l-1.6-16.2z" fill="#fff"/></svg>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.5"><path d="M10.4 126.9 0 0l124 .3-11 126.6-50.5 14.6z" fill="#1b73ba"/><path d="M62.5 129.3V12l51 .2-9 104.8z" fill="#1c88c7"/><path d="M100.9 27H22.3l2.1 15.4h37.3L25 58 27.1 73h54l-1.9 20.7L61 97.2l-16.6-4.3-1.2-11.7H27.8l2 24.4 32.8 9.1 31.3-10 4-47.7H64.8l36-15z" fill="#fff"/></svg>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.5"><path d="M10.4 126.9 0 0l124 .3-11 126.6-50.5 14.6z" fill="#e9ca32"/><path d="M62.5 129.3V12l51 .2-9 104.8z" fill="#ffde25"/><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zm10.1 0h37.4L102 41H81.4v24.5H102L99.5 115l-32.4 7.5V107L89 99.5 90.3 79 67 82.4z" fill="#fff"/></svg>
                        </div>
                    </div>
                </li>     
                )
            })}
            </ul>
        </div>
    )
}