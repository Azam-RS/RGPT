import React from "react";
import Layout from "@theme/Layout";
import "./team.css";

export default function Team() {
  return (
    <Layout title="Team" description="Team">
      <div className="teamSection">
        <div className="container">
          <h1>Team</h1>
          <div className="team-holder">
            <div className="row">
              <div className="col col--4">
                <img src="/img/naveed.png" alt="Naveed Sherwani" />
              </div>
              <div className="col col--8">
                <h2>Naveed Sherwani</h2>
                <p className="desg">Chairman</p>
                <p>
                  A well-known semiconductor industry veteran with over 35 years
                  of entrepreneurial, engineering, and management experience. He
                  is widely recognized as an innovator and leader in the field
                  of design automation of ASICs and microprocessors having led
                  over 300 tapeouts. He is main driver of the strategic
                  evangelization of RISC-V International.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="teamSection" style={{ background: "white" }}>
        <div className="container">
          <div className="team-holder">
            <div className="row">
              <div className="col col--8">
                <h2>Pierre-Emmanuel Gaillardon</h2>
                <p className="desg">CEO</p>
                <p>
                  15 years of innovation in the field of FPGA, EDA. Associate
                  Professor and at The University of Utah and Principal
                  Investigator of OpenFPGA. Recipients of prestigious NSP CAREER
                  award, DARPA Young Faculty Award, IEEE CEDA Ernest Kuh award
                  and ACM SIGDA ONFA award. Author of 230+ peer-reviewed
                  publications in AI and EDA.
                </p>
              </div>
              <div className="col col--4">
                <img src="/img/pierre.png" alt="Pierre-Emmanuel Gaillardon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="teamSection">
        <div className="container">
          <div className="team-holder">
            <div className="row">
              <div className="col col--4">
                <img src="/img/valerio.png" alt="Valerio Tenace" />
              </div>
              <div className="col col--8">
                <h2>Valerio Tenace</h2>
                <p className="desg">CTO</p>
                <p>
                  PhD. in Information and Systems Engineering. Since 2016,
                  author of more than 20 research articles and 4 patents mainly
                  in the area of artificial intelligence techniques for hardware
                  design. Creator and active maintainer of RapidGPT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
