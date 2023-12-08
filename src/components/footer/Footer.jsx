import React from 'react'
import icon from '../../images/a4.png';
import './footer.css';
const Footer = () => {
  return (
    <section className='block block--dark'>
      <div className="footer__brand">
          <img src={icon} alt="" />
          <p className="footer__copyright">Copytight©2023 Abdi Tefera</p>
        </div>
    </section>
  )
}

export default Footer
