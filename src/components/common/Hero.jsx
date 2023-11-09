import React from "react";
import banner from "../../images/banner.jpg";
import "./styles/hero.css";

const Hero = () => {
	return (
		<section className="block block--dark block--skewed-left">
			<div className="container grid grid--1x2">
				<header className="block__header hero__content">
					<h1 className="hero__heading block__heading">
						Abdi Tefera
					</h1>
					<p className="hero__tagline">Software Engineer</p>
					<a href="#" className="btn btn--primary btn--stretched">
						About
					</a>
				</header>
				<picture>
					{/* <source
        type="image/webp"
        srcset="../../images/banner.webp 1x, ../../images/banner@2x.webp 2x"
      />
      <source
        type="image/png"
        srcset="images/banner.png 1x, images/banner@2x.png 2x"
      /> */}
					<img className="hero__image" src={banner} alt="" />
				</picture>
			</div>
		</section>
	);
};

export default Hero;
