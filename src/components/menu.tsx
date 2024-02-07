import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux";
import { reset } from "../redux/cart/cart-slice";
import { userLogout } from "../redux/users/login-slice";

const Menu = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="white"
        className="shadow px-0 py-3"
      >
        <div className="container-xl">
          {/* Logo */}
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="/LogoMakr-6Tit9e.png"
              className="avatar rounded me-lg-10"
              alt="..."
            />
          </Navbar.Brand>
          {/* Navbar toggle */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* Collapse */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Nav */}
            <div className="navbar-nav me-lg-auto">
              <Nav.Item
                as={NavLink}
                className=" nav-link active"
                to="/"
                aria-current="page"
              >
                <span>Home</span>
              </Nav.Item>
              <Nav.Item as={NavLink} className=" nav-link" to="/home">
                <span>Product</span>
              </Nav.Item>

              <Nav.Item as={NavLink} className=" nav-link" to="/contact">
                <span>Contact</span>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Menu;
