import React from "react";
import "./styles/card.css";
import icon from "../../images/js.png";
const Card = ({title, picture, discription, link}) => {
	return (
			<div className="card card--secondary">
				<header
					className="card__header"
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<span style={{ paddingRight: "1rem" }}>
						<img width="30px" height="30px" src={icon} alt="" />
					</span>
					{title}
				</header>
				<div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
					<img style={{width: '100%', height: '50vh'}} src={picture} alt="" />
				</div>
				<div className="card__body">
					{discription}
				</div>
				<div style={{alignSelf: 'center', paddingBottom: '1rem'}}>
					<a href={link} target="_blank" className="link-arrow">
						see more
					</a>
				</div>
			</div>
	);
};

export default Card;
