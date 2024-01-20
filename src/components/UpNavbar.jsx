import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../images/logo.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const UpNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  //logout function
  const navigate = useNavigate();
  const handlelogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/land");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={img1} alt="" style={{ height: "50px", width: "210px" }} />
        </a>
        <ul className="navbar-nav" style={{ marginLeft: '14rem' }} role="search">
          <li className="nav-item">
            <form className="d-flex mx-auto">
              <input
                className="form-control custom-search-lg  border-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  width: "500px",
                  height: "calc(1.5em + 0.75rem + 2px)",
                  borderRadius: "0.25rem",
                }}
              />
            </form>
          </li>
        </ul>
        <form className="navbar-nav ms-auto">
          <li className="nav-item">
            {user ? (
              <>
               <div className="d-flex align-items-center " style={{ marginLeft: '4rem' }}>
                <img
                  src={`${user.userImageUrl}`}
                  alt=""
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
                
                <div class="dropdown">
                  <button
                    class="btn btn-outline-light border-0  dropdown-toggle fs-5 text-success "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                Welcome <span className="text-dark">{user.firstName}</span>!
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to={`/profile/edit/${user._id}`}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/changepp">
                        Reset Password
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/changepp">
                        Forgot Password
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handlelogout}
                        class="dropdown-item"
                        to="/logout"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
                
                </div>
              </>
            ) : (
              <>
                <Link
                  className="btn btn-outline-dark rounded-pill me-2 "
                  to={"/login"}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-outline-dark rounded-pill  me-3"
                  to={"/signup"}
                >
                  Register
                </Link>
              </>
            )}
          </li>
        </form>
        {/* Wishlist and Cart Icons */}
        <ul className="navbar-nav ms-auto">
          {/* ... */}
          <li className="nav-item">
            <a className="nav-link icon-red" href="#">
              <FaHeart className="text-red fs-5" />
              <span className="visually-hidden">Wishlist</span>
              <span className="text-dark ms-1">Wishlist</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link icon-green" href="#">
              <FaShoppingCart className="text-green fs-5" />
              <span className="visually-hidden">Cart</span>
              <span className="text-dark ms-1">Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default UpNavbar;
