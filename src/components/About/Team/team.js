import React from "react";
import "./team.css";

const Team = () => {
    return (
        <div>
            <div id="team" className="fea-sec">
                <div className="container">
                    <div className="row">
                        <div className="col col--12">
                            <div className="contentTags">Team</div>
                            <div className="row tm-top">
                                <div className="col col--4">
                                    <div className="team-img">
                                        <img src="img/naveed.png" alt="naveed" />
                                    </div>
                                    <div className="team-holder">
                                        <h3>
                                            Naveed Sherwani
                                            <br />
                                            <span className="small-txt">Chairman</span>
                                        </h3>
                                        <p>
                                            A well-known semiconductor industry veteran with over 35
                                            years of entrepreneurial, engineering, and management
                                            experience. He is widely recognized as an innovator and
                                            leader in the field of design automation of ASICs and
                                            microprocessors having led over 300 tapeouts. He is main
                                            driver of the strategic evangelization of RISC-V
                                            International.
                                        </p>
                                    </div>
                                </div>
                                <div className="col col--4">
                                    <div className="team-img">
                                        <img src="img/pierre.png" alt="pierre" />
                                    </div>
                                    <div className="team-holder">
                                        <h3>
                                            Pierre-Emmanuel Gaillardon <br />
                                            <span className="small-txt">CEO</span>
                                        </h3>
                                        <p>
                                            15 years of innovation in the field of FPGA, EDA.
                                            Associate Professor and at The University of Utah and
                                            Principal Investigator of OpenFPGA. Recipients of
                                            prestigious NSP CAREER award, DARPA Young Faculty Award,
                                            IEEE CEDA Ernest Kuh award and ACM SIGDA ONFA award.
                                            Author of 230+ peer-reviewed publications in AI and EDA.
                                        </p>
                                    </div>
                                </div>
                                <div className="col col--4">
                                    <div className="team-img">
                                        <img src="img/valerio.png" alt="valerio" />
                                    </div>
                                    <div className="team-holder">
                                        <h3>
                                            Valerio Tenace <br />
                                            <span className="small-txt">CTO</span>
                                        </h3>
                                        <p>
                                            PhD. in Information and Systems Engineering. Since 2016,
                                            author of more than 20 research articles and 4 patents
                                            mainly in the area of artificial intelligence techniques
                                            for hardware design. Creator and active maintainer of
                                            RapidGPT.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;