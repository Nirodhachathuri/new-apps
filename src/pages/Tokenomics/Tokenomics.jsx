import React from 'react'

import './Tokenomics.css';
import chartImg from '../../assets/images/chart-img.png';
import cloud1 from '../../assets/images/floating-cloud1.svg'
import cloud2 from '../../assets/images/floating-cloud2.svg'

import phase1 from '../../assets/images/phase-img1.svg';
import phase2 from '../../assets/images/phase-img2.svg';
import phase3 from '../../assets/images/phase-img3.svg';
import phase4 from '../../assets/images/phase-img4.svg';
import phase5 from '../../assets/images/phase-img5.svg';


function Tokenomics() {
  return (
    <div className="tokenomics-page">
      <div className="tokenomics-chart-area">
        <h2>Tokenomics</h2>
        <div className="chart-img aos-init aos-animate" data-aos="zoom-in">
          <img src={chartImg} alt="img" />
        </div>
        <div className="chart-counting aos-init" data-aos="fade-up">
          <div className="chart-count-item">
            <h4>10%</h4>
            <p>Team</p>
          </div>
          <div className="chart-count-item">
            <h4>10%</h4>
            <p>Community Rewards</p>
          </div>
          <div className="chart-count-item">
            <h4>30%</h4>
            <p>Staking</p>
          </div>
          <div className="chart-count-item">
            <h4>20%</h4>
            <p>Private Sale</p>
          </div>
          <div className="chart-count-item">
            <h4>10%</h4>
            <p>CEX Listing</p>
          </div>
          <div className="chart-count-item">
            <h4>10%</h4>
            <p>Liquidity</p>
          </div>
          <div className="chart-count-item">
            <h4>5%</h4>
            <p>Marketing</p>
          </div>
          <div className="chart-count-item">
            <h4>5%</h4>
            <p>Airdrop</p>
          </div>
        </div>
      </div>
      <div className="floating-cloud1">
        <img src={cloud2} alt="" />
      </div>
      <div className="floating-cloud2">
        <img src={cloud1} alt="" />
      </div>
      <div className="roadmap-area" id="roadmapscroll">
        <div class="roadmap-heading-wrapper">
          <h2>RoadMap</h2>
          {/* <!-- <div class="road-btn-group">
                     <a href="#" class="btn-skew2 btn-warning-solid">Join Community</a>
                     <a href="#" class="btn-skew1 btn-warning-solid">Explore White Paper</a>
                     </div> --> */}
        </div>
        <div class="road-phase-area aos-init" data-aos="fade-up">
          <div class="custom-row">
            <div class="custom-grid">
              <div class="road-each-phase-part">
                <div class="road-phase-head-wrap">
                  <div class="road-each-phase-heading">
                    <div class="phase-shape">
                      Phase 1
                    </div>
                    <h3>Develop</h3>
                  </div>
                  <div class="road-each-phase-heading-img">
                    <img src={phase1} alt="img" />
                  </div>
                </div>
                <div class="road-phase-body-wrap">
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Token Creation
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Website Launch
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Tokenomics Design
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Social Media Platforms
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Documentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="custom-grid">
              <div class="road-each-phase-part">
                <div class="road-phase-head-wrap">
                  <div class="road-each-phase-heading">
                    <div class="phase-shape">
                      Phase 2
                    </div>
                    <h3>Private sale</h3>
                  </div>
                  <div class="road-each-phase-heading-img">
                    <img src={phase2} alt="img" />
                  </div>
                </div>
                <div class="road-phase-body-wrap">
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Legal Compliance
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Valuation And Offering Structure
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Identify Potential Investors
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Offering Documentation
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Closing The Sale
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="custom-grid">
              <div class="road-each-phase-part">
                <div class="road-phase-head-wrap">
                  <div class="road-each-phase-heading">
                    <div class="phase-shape">
                      Phase 3
                    </div>
                    <h3>Launch</h3>
                  </div>
                  <div class="road-each-phase-heading-img">
                    <img src={phase3} alt="img" />
                  </div>
                </div>
                <div class="road-phase-body-wrap">
                  <div class="static-check">
                    <div class="custom-check-box customchecked">
                    </div>
                    <div class="custom-check-label">
                      Marketing
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Airdrop For Community
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      CG Listing
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      CMC Listing
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      First CEX Listing
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      First DEX Listing
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="custom-grid">
              <div class="road-each-phase-part">
                <div class="road-phase-head-wrap">
                  <div class="road-each-phase-heading">
                    <div class="phase-shape">
                      Phase 4
                    </div>
                    <h3>Grow</h3>
                  </div>
                  <div class="road-each-phase-heading-img">
                    <img src={phase4} alt="img" />
                  </div>
                </div>
                <div class="road-phase-body-wrap">
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Onboarding Influencers
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Meme Competition
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Second CEX Listing
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Brand Marketing
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="custom-grid">
              <div class="road-each-phase-part">
                <div class="road-phase-head-wrap">
                  <div class="road-each-phase-heading">
                    <div class="phase-shape">
                      Phase 5
                    </div>
                    <h3>To the moon</h3>
                  </div>
                  <div class="road-each-phase-heading-img">
                    <img src={phase5} alt="img" />
                  </div>
                </div>
                <div class="road-phase-body-wrap">
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Top Tier CEX listing
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      100000 holders
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Top 500 Marketcap
                    </div>
                  </div>
                  <div class="static-check">
                    <div class="custom-check-box">
                    </div>
                    <div class="custom-check-label">
                      Moon Is The Limit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;



