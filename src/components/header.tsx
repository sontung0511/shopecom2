import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux";
import { userLogout } from "../redux/users/login-slice";
import { reset } from "../redux/cart/cart-slice";
import { Nav, NavDropdown } from "react-bootstrap";
const Header = () => {
  const { userInfo } = useAppSelector((state) => state.login);
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(userLogout());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <>
      <div className="flex">
        <div className="container text-light">
          <div className="w-full d-flex justify-content-between align-items-center">
            <div>
              <i className="fa text-sm  fa-envelope mx-2"></i>
              <a
                className="navbar-sm-brand text-light text-sm text-decoration-none"
                href="mailto:info@company.com"
              >
                typeshop@me.com
              </a>
              <i className="fa text-sm  fa-phone mx-2"></i>
              <a
                className="navbar-sm-brand text-sm  text-light text-decoration-none"
                href="tel:010-020-0340"
              >
                06 76 56 48 93
              </a>
            </div>
            <div>
              <a
                className="text-light"
                href="https://fb.com"
                target="_blank"
                rel="sponsored"
              >
                <i className="fab text-sm  fa-facebook-f fa-sm fa-fw me-2"></i>
              </a>
              <a
                className="text-light"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i className="fab text-sm  fa-instagram fa-sm fa-fw me-2"></i>
              </a>
              <a
                className="text-light"
                href="https://twitter.com/"
                target="_blank"
              >
                <i className="fab text-sm fa-twitter fa-sm fa-fw me-2"></i>
              </a>
              <a
                className="text-light"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <i className="fab text-sm fa-linkedin fa-sm fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white flex">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <span className="text-2xl">Flowbite</span>
          {/* <Button data-collapse-toggle="navbar-default" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false" >
            a
        </Button> */}
          {/* Right navigation */}

          <div className="flex">
            <div className="d-flex align-items-center">
              <Link className="nav-link" to="/home">
                <i className="fa fa-fw fa-search text-dark me-2"></i>
              </Link>
              <Link
                className="nav-icon position-relative text-decoration-none"
                to="/cart"
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark me-2 "></i>
                <span
                  style={{ backgroundColor: "#e03a3c" }}
                  className="position-absolute top-0 left-100 translate-middle badge rounded-pill  text-white"
                >
                  {cartItems.length}
                </span>
              </Link>
            </div>
            {!userInfo ? (
              <>
                <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                  <Nav.Link
                    as={NavLink}
                    to="/login"
                    className="btn btn-secondary btn-sm text-white me-3 ms-5 "
                  >
                    Login
                  </Nav.Link>
                </div>

                <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                  <Nav.Link
                    as={NavLink}
                    to="/register"
                    style={{ backgroundColor: "#e03a3c" }}
                    className="btn btn-sm text-white  ms-xs-3 "
                  >
                    Register
                  </Nav.Link>
                </div>
              </>
            ) : (
              <NavDropdown
                title={<i className="fa fa-fw fa-user text-dark mr-3"></i>}
                id="basic-nav-dropdown"
              >
                {userInfo.isAdmin && (
                  <NavDropdown.Item as={NavLink} to="/dashboard">
                    Dashboard
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item as={NavLink} to={`/profile/${userInfo._id}`}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
