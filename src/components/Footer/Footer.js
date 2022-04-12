import React from "react";
import {
  AiFillLinkedin, AiFillSkype, AiFillTwitterSquare, AiFillYoutube, AiOutlineBehanceSquare
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import logo from "../../images/logo.png";
import map from "../../images/map.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row row-cols-1  row-cols-md-3 row-cols-lg-6">
          <div>
            <h6>Locations</h6>
            <div className="margin_bottom">
              <h6 className="mb-3">India</h6>
              <div>
                <p className="m-0">415, 4th Floor,</p>
                <p className="m-0">Maruti Plaza, Krishnanagar,</p>
                <p className="m-0">Ahmedabad - 382346,</p>
                <p className="m-0">India</p>
              </div>
            </div>
          </div>
          <div className="margin_Kingdom">
            <h6 className="mb-3">United Kingdom</h6>
            <p className="m-0">
              Multipz Technology Limited Flat 6 Farmstead Court 6 Melbourne Road
              Wallington xs6 8SY
            </p>
          </div>

          <div className="Developers">
            <h6>Dedicated Developers</h6>
            <p className="margin_bottom">
              Software Developers Angular JS Developers Node.js Developers PHP
              Web Developers iOS App Developers
            </p>
          </div>
          <div className="margin_Kingdom medium_size">
            <p className="m-0">
              Android App Developers Mobile App Developers Flutter App
              Developers Fronted Developers Full Stack Developers
            </p>
          </div>

          <div className="medium_size">
            <h6>Contact</h6>
            <div className="margin_bottom">
              <p className="m-0">info@multipz.com</p>
              <p className="m-0">+91 82005 54263</p>
            </div>
          </div>
          <div className="medium_size">
            <h6>Quick Links</h6>
            <div className="margin_bottom">
              <p className="m-0">Company</p>
              <p className="m-0">Services</p>
              <p className="m-0">Hire Developer</p>
              <p className="m-0">Case Study</p>
              <p className="m-0">Blog</p>
              <p className="m-0">Career</p>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="row mt-5">
          <div className="col-xs-12 col-md-4 col-lg-4 footer-content-role">
            <img className="logo" src={logo} alt="" />
            <p className="my-3">
              Multipz Technology is a multi-service company with a focus to
              provide innovative and value-based services. We have been helping
              businesses through our web development, artificial intelligence,
              custom development, and mobile app development services. Our core
              competency lies in providing in-house and offshore solutions.
            </p>

            <button className="common_btn mt-4">Let’s Talk</button>
          </div>
          <div className="col-xs-12 col-md-8 col-lg-8">
            <img className="img-fluid" src={map} alt="" />
          </div>
        </div>
        <div className="footer-b">
          
            <p>© 2021 - All Rights Reserved By Multipz Technology with ❤️</p>
         
          <div>
            <span className="footer_icons">
              <FaFacebookSquare />
            </span>
            <span className="footer_icons">
              <AiFillLinkedin />
            </span>
            <span className="footer_icons">
              <AiFillSkype />
            </span>
            <span className="footer_icons">
              <AiFillYoutube />
            </span>
            <span className="footer_icons">
              <AiFillTwitterSquare />
            </span>
            <span className="footer_icons">
              <AiOutlineBehanceSquare />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
