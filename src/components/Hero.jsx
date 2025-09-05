import React from 'react'

export default function Hero() {
  return (
    <>
        <section className="hero-area section-link" id="home-section">
    <div className="ecosystem-icon-animation">
      <div className="ecosystem-icon ecosystem-icon-1">
        <img src="images/icon/1.png" alt="image" />
      </div>
      <div className="ecosystem-icon ecosystem-icon-2">
        <img src="images/icon/2.png" alt="image" />
      </div>
      <div className="ecosystem-icon ecosystem-icon-3">
        <img src="images/icon/3.png" alt="image" />
      </div>
      <div className="ecosystem-icon ecosystem-icon-4">
        <img src="images/icon/4.png" alt="image" />
      </div>
      <div className="ecosystem-icon ecosystem-icon-5">
        <img src="images/icon/5.png" alt="image" />
      </div>
      <div className="ecosystem-icon ecosystem-icon-6">
        <img src="images/icon/6.png" alt="image" />
      </div>
    </div>
    <div className="ellipse ellipse-1" />
    <div className="ellipse ellipse-2" />
    <div className="toplight">
      <span className="small-shadow" />
    </div>
    <div className="hero-line hero-line1">
      <img src="images/bg/line.png" alt="img" />
    </div>
    <div className="hero-line hero-line2">
      <img src="images/bg/line.png" alt="img" />
    </div>
    <div className="dots-background dotsBackground" />
    <div className="hero-card hero-card1">
      <h3>ECM Holders</h3>
      <p>20,153</p>
    </div>
    <div className="hero-card hero-card2">
      <h3>Total ECM Sold</h3>
      <p>20,153</p>
    </div>
    <div className="container">
      <div className="hero-content">
        {/* Hero Title animation start  */}
        <div className="style-2">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1 col-lg-10 offset-lg-1">
              <div className="hero-title reveal-wrapper">
                <h1>
                  Architecting the Future of Digital Commerce <span className='secondary_color'> MetaFusion Labs</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Title animation start  */}
        {/* Hero Title animation start  */}
        <div className="style-3">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="hero-title reveal-wrapper">
                <p className="text-center mt-5">
                  Powering ECM Coin and its ecosystem—delivering scalable,
                  low-cost, blockchain infrastructure for e-commerce, trading
                  and beyond.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-btn-wrapper position-relative mt-5">
            <a href="#" className="hero-btn">
              <div className="light-particle" />
              <div className="light-particle" />
              <div className="light-particle" />
              <span>
                Start Exploring
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
