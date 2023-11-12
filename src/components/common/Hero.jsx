import React from "react";
import banner from "../../images/banner.jpg";
import "./styles/hero.css";

const Hero = () => {
	return (
		<section id="home" className="block block--dark block--skewed-left">
			<div className="container grid grid--1x2">
				<header className="block__header hero__content">
					<h1 className="hero__heading block__heading">
						Abdi Tefera
					</h1>
					<p className="hero__tagline">Software Engineer</p>
					<a href="#about" className="btn btn--primary btn--stretched">
						About
					</a>
				</header>
				<picture>
					<img className="hero__image" src={banner} alt="" />
				</picture>
			</div>
		</section>
	);
};

export default Hero;
