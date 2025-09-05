import React from 'react'

export default function MainSection() {
  return (
    <>
     <main>
  <section className="empower-area section-link" id="about">
    <div className="ellipse ellipse-3" />
    <div className="dots-background dotsBackground" />
    <div class="hero-bg">
    <img src="images/bg/hero-bg.png" alt="image" />
  </div>
    {/* lottifile loading animation start */}
    <div id="lottie-empower" />
    {/* lottifile loading animation End */}
    <div className="container empower-container">
      <div class="empower-bg">
      <img src="images/bg/empower.png" alt="image" />
    </div>
      <div className="empower-content">
        <div className="row empower-top">
          {/* 1.single item start  */}
          <div className="col-lg-6 col-xl-6">
            <div className="empower-head-text text-center text-lg-start">
              <h2>Empowering the Future of Blockchain</h2>
              <p>
                MetaFusion Labs is a blockchain solutions company officially
                registered in Panama, serving as the parent organization behind
                the ECM Ecosystem. With a strong focus on developing
                decentralized infrastructure, MetaFusion Labs partners
                strategically with BlockVerse Solutions LLC—an industry leader
                in token issuance and blockchain development—to deliver
                scalable, innovative Web3 solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="logo-thumbnails">
              <div className="logo-thumbnails-set" id="target-box" />
            </div>
            <div className="empower-image-flip d-block d-xl-none">
              <img src="images/bg/empower.png" alt="image" />
            </div>
          </div>
          {/* 1.single item End  */}
        </div>
        <div className="empower-bottom">
          <div className="row g-5">
            {/* 1.single empower card start   */}
            <div className="col-md-6 col-xl-3">
              <div className="single-empower-card single-empower-card-1">
                <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                  <img
                    className="empower-icon"
                    src="images/icon/power-1.png"
                    alt="image"
                  />
                  <h3 className="p-0 pt-md-3 pb-md-3">
                    Blockchain Infrastructure
                  </h3>
                </div>
                <p>
                  MetaFusion Labs is a blockchain solutions company officially
                  registered in Panama, serving as the parent organization
                  behind the ECM Ecosystem.
                </p>
              </div>
            </div>
            {/* 1.single empower card End  */}
            {/* 2.single empower card start   */}
            <div className="col-md-6 col-xl-3">
              <div className="single-empower-card">
                <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                  <img
                    className="empower-icon"
                    src="images/icon/power-2.png"
                    alt="image"
                  />
                  <h3 className="p-0 pt-md-3 pb-md-3">Ensure Accessibility</h3>
                </div>
                <p>
                  Make Web3 tools and platforms easy to use and available to
                  everyone—businesses and individuals alike.
                </p>
              </div>
            </div>
            {/* 2.single empower card End  */}
            {/* 3.single empower card start   */}
            <div className="col-md-6 col-xl-3">
              <div className="single-empower-card single-empower-card-3">
                <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                  <img
                    className="empower-icon"
                    src="images/icon/power-3.png"
                    alt="image"
                  />
                  <h3 className="p-0 pt-md-3 pb-md-3">
                    Bridge Finance &amp; Comm-erce
                  </h3>
                </div>
                <p>
                  Develop robust systems capable of supporting large-scale
                  dece-ntralized applications.
                </p>
              </div>
            </div>
            {/* 3.single empower card End  */}
            {/* 4.single empower card start   */}
            <div className="col-md-6 col-xl-3">
              <div className="single-empower-card">
                <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                  <img
                    className="empower-icon"
                    src="images/icon/power-4.png"
                    alt="image"
                  />
                  <h3 className="p-0 pt-md-3 pb-md-3">
                    Champion Decentralization
                  </h3>
                </div>
                <p>
                  Promote transparent, decentralized technologies that empower
                  users and remove centralized control.
                </p>
              </div>
            </div>
            {/* 4.single empower card End  */}
          </div>
        </div>
      </div>
    </div>
  </section>
          </main>
    </>
  )
}
