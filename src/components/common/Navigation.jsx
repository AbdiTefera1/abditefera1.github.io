import React, { useState } from 'react';
import './styles/navigation.css'; 
import icon  from '../../icons/menu.svg';
import logo from '../../images/a4.png'

function Navigation() {
  const [onToggler, setOnToggler] = useState(false);

  const handleOnClick = () => {
    setOnToggler(!onToggler);
  }
  return (
    <header>
      <nav className={onToggler ? `nav collapsible collapsible--expanded` : `nav collapsible`}>
        <a className="nav__brand" href="/"><img src={logo} alt="" /></a>

        <span className="icon icon--white nav__toggler">
          <img className='menu_icon' onClick={handleOnClick} src={icon} alt='' style={{width:'40px', height: '40px', color: '#fff'}}/>
        </span>
        <ul className="list nav__list collapsible__content" style={{backgroundColor: '#fff', borderRadius: 20, padding: '1rem 1rem'}}>
          <li className="nav__item"><a href="#home">Home</a></li>
          <li className="nav__item"><a href="#projects">Project</a></li>
          <li className="nav__item"><a href="#about">About</a></li>
          <li className="nav__item"><a href="#contact">Contact</a></li>
          {/* <li className="nav__item"><a href="/">Articles</a></li> */}
        </ul>
      </nav>
     </header>
  );
}

export default Navigation;
