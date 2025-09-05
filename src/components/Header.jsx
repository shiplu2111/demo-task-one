import React from 'react'

export default function Header() {
  return (
    <>
    <header className="header-area">
    <div className="container extra-container">
      <div className="d-flex align-items-center justify-content-between header">
        <div className="logo fade-in-left">
          <a href="#">
            <img src="/images/logo.png" alt="logo" />
          </a>
          <button className="mobile-bars d-lg-none d-block">
            <i className="fa-solid fa-bars-staggered" />
          </button>
        </div>
        <div className="nav">
          <ul className="d-flex flex-lg-row flex-column align-items-center gx-4">
            <li className="fade-in-left nav-item-1">
              <a className="nav-link active" href="#home-section">
                Home
              </a>
            </li>
            <li className="fade-in-left nav-item-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="fade-in-left nav-item-3">
              <a className="nav-link" href="#ecmcoin">
                ECM Coin
              </a>
            </li>
            <li className="fade-in-left nav-item-4">
              <a className="nav-link" href="#ecosystem">
                Ecosystem
              </a>
            </li>
            <li className="fade-in-left nav-item-5 d-block d-lg-none">
              <a href="#footer" className="btn-1 nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="header-btn d-lg-block d-none">
          <div className="d-flex align-items-center">
            <a href="#" className="btn-1 fade-in-right btn-animate">
              Contact Us
            </a>
            <div className="dropdown fade-in-right dropdown-item-animate">
              <div className="position-relative">
                <span
                  className="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="images/icon/world.svg" alt="photos" />
                  EN
                </span>
                <ul className="dropdown-menu country-dropdown">
                  <li>
                    <a className="dropdown-item active" href="#">
                      EN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      BN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}
