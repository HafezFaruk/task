

import logo from '../../images/logo.png';
import "./Navbar.css";

const Navbar = () => {
 
  return (
    <div className="container mb-5">
    <nav>
      <input type="checkbox" id="check" />
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="#company">Company</a>
        </li>
        <li>
          <a href="#info">Services</a>
        </li>
        <li>
          <a href="#whitepaper">Hir Developer</a>
        </li>
        <li>
          <a href="#roadmap">Case Study</a>
        </li>
        <li>
          <a href="#audits">Career</a>
        </li>
        <li>
          <a href="#faq">Blog</a>
        </li>
      </ul>
      <span className="nav_btn">
        <button className="common_btn">Connect</button>
      </span>
    </nav>
    </div>
  );
};

export default Navbar;