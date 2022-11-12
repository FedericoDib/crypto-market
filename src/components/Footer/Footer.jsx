import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import './Footer.scss'

function Footer() {
  return (
    <>
        <footer className="home__footer">
            <div className="footer__container">
                <div className="footer__text">
                    <span>Created by <a className="footer__anchor-portfolio" href='https://federico-dib.vercel.app/' target="_blank" rel='noopener noreferrer'>{'< div.dev />'}</a></span>
                    <a href="https://www.linkedin.com/in/federico-dib-developer/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="footer__icon" /></a>
                    <a href="https://github.com/FedericoDib" target="_blank" rel="noopener noreferrer"><AiFillGithub className="footer__icon" /></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer