import React from "react";
import "./about.css";
import imgUrl from "../../images/banner.jpg";
const About = () => {
	return (
		<section className="block">
			<header className="block__header">
				<h2>About</h2>
			</header>
			<div className="container">
				<div className="card">
					<div className="grid grid--1x2">
						<div className="about__image">
							<img
								src={imgUrl}
								alt="A happy, smilling customer"
							/>
						</div>
						<blockquote className="about__info" style={{display: "flex", alignItems: "center"}}>
							<p class="about__text">
								Highly-driven software engineering student with
								growing knowledge in JavaScript, Python, MySQL,
								and Java seeking a software engineering
								internship at Software Company. As a MERN Stack and Django full
								stack developer, I am ready to contribute my
								passion and skills to help drive innovation as a
								global.
							</p>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
