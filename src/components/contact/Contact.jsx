import React from "react";
import facebook from '../../icons/facebook.png'
import gmail from '../../icons/gmail.png'
import twitter from '../../icons/x2.png'
import phone from '../../icons/phone2.png'
import Media from "../common/Media";

const contacts = [
  {title: 'Facebook', imgUrl: facebook, link: "https://www.facebook.com/profile.php?id=61550796238511"},
  {title: 'abditefera11@gmail.com', imgUrl: gmail, link: "mailto:abditefera11@gmail.com"},
  {title: 'Twitter', imgUrl: twitter, link: "https://twitter.com/abditefera1"},
  {title: '+251967118825', imgUrl: phone, link: "tel:+251967118825"},
]
const Contact = () => {
	return (
		<section id="contact" className="block">
			<header className="block__header">
				<h2>Contact</h2>
			</header>
			<div className="container">
				<ul className="list">
					{contacts.map(contact => (
            <li>
              <Media title={contact.title} link={contact.link} imgUrl={contact.imgUrl}/>
            </li>
          ))}
				</ul>
			</div>
		</section>
	);
};

export default Contact;
