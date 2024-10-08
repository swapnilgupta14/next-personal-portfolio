import React, { useEffect } from 'react';
import Image from 'next/image';

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log("about");
                if (entry.isIntersecting) {
                    entry.target.classList.add('prjShow');
                } else {
                    entry.target.classList.remove('prjShow');
                }
            });
        });

        const elements = document.querySelectorAll(".anm");
        console.log("hii", elements);
        elements.forEach((el) => observer.observe(el));

        const ele2  = document.querySelector(".profileImage");
        observer.observe(ele2);

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const data = [
        { number: '10+', text: 'Projects' },
        { number: '600+', text: 'Solved DSA Problems' },
        { number: '15+', text: 'CourseWorks' },
        { number: '1yr', text: 'Experience Count' },
    ];

    return (
        <div className="aboutWrapper">
            <div className="left">
                <div className="inside-div">
                    {data.map((item, index) => (
                        <div key={index} className="item anm">
                            <h2>{item.number}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right">
                <div className="profileImage">
                    <Image src="/profile-pic.png" alt="profile" width={300} height={300} />
                </div>
            </div>
        </div>
    );
};

export default About;
