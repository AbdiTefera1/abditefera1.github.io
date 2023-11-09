import React from "react";
import './styles/media.css';

const Media = ({title, imgUrl, link}) => {
	return (
		<div className="media">
			<div className="media__image">
				<span className="">
					<img src={imgUrl} className="icon" alt="" />
				</span>
			</div>
			<div className="media__body">
				<a href={link} className="media__title">
					{title}
				</a>
			</div>
		</div>
	);
};

export default Media;
