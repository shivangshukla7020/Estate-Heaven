import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <header className="fixed-top">
      {/* Jumbotron */}
      <div className="p-3 text-center bg-white border-bottom">
        <div className="container-fluid">
          <div className="row">
            {/* Left Elements */}
            <div className="col-md-5 d-flex justify-content-center justify-content-md-start align-items-center d-none d-lg-flex">
              <a className="text-reset me-3" href="#">
                <i className="fas fa-th-large"></i>
              </a>
              <a className="text-reset me-3" href="#">
                <i className="fas fa-home"></i>
              </a>
              <a className="text-reset me-3" href="#">
                <i className="fas fa-columns me-1"></i>
                <span className="d-none d-xl-inline-block">Boards</span>
              </a>
              <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                />
                <span className="input-group-text border-0 d-none d-lg-flex">
                  <i className="fas fa-search"></i>
                </span>
              </form>
            </div>

            {/* Center Elements */}
            {/* <div className="col-md-2 d-none d-lg-block">
              <a href="#!" className="ms-md-2">
                <img
                  src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                  height="35"
                  alt="Logo"
                />
              </a>
            </div> */}

            {/* Right Elements */}
            <div className="col-lg-5 d-flex justify-content-center justify-content-md-end align-items-center">
              <a className="text-reset me-3" href="#">
                <i className="fas fa-plus"></i>
              </a>
              <a className="text-reset me-3" href="#">
                <i className="fas fa-info-circle"></i>
              </a>
              <div className="dropdown">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Some news</a></li>
                  <li><a className="dropdown-item" href="#">Another news</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle user-profile"
                    height="22"
                    alt="User"
                    loading="lazy"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">My profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */} 
      

      
    </header>
  );
}

export default Navbar;
