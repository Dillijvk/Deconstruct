import { BsCart3 } from "react-icons/bs";
import './css/navbar.css'
import { Link } from "react-router-dom";
import './css/index.css';

export default function Navbar() {




  

  return (

    <>
    <div className="slider-container">
          <h1 className="slider-text">
          WELCOME TO DECONSTRUCT
          </h1>
        </div>
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/Shop">SHOP</Link>
        <Link to="/Blogs">BLOGS</Link>
        <Link to="/TrackOrder">TRACK YOUR ORDED</Link>
       <div className="cart-container">
  <BsCart3  className="cart-icon" />
  <span className="cart-count">3</span>
</div>
       </div>
    </nav>





    </>
  );
}