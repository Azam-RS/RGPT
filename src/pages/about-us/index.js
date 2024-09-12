import React from "react";
import Layout from "@theme/Layout";
import "./about-us.css";

export default function AboutPrimis() {
    return (
        <Layout title="About PrimisAI" description="About PrimisAI">
                <div className="main-holder">
                    <div className="abt-b-txt">
                        <h1>About Us</h1>
                        <p>Dive into the Heart of PrimisAI, Where Innovation Meets Expertise to Redefine the Hardware Landscape</p>
                    </div>
                </div>
                <div className="wel-box">
                    <div className="container">
                    <div className="row">
                            <div className="col col--12 text--center">
                                <div className="desc-about">
                                    <h1>Our Mission</h1>
                                    <p>
                                        PrimisAI is committed to redefining the landscape of hardware design with a commitment to excellence and transformative technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="abt-pai">
                    <div className="container">
                        <div className="row">
                           <div className="col col--12">
                            <div className="bg-blk">
                                <div className="row">
                                    <div className="col col--5">
                                        <div className="bggreen"></div>
                                    </div>
                                    <div className="col col--7">
                                        <div className="txt-about">
                                            <h1>About PrimisAI</h1>
                                            <p>
                                                PrimisAI is the premier destination for cutting-edge hardware design automation, offering engineers the ultimate companion with advanced Language-to-Code and Language-to-Verification capabilities. Our interactive AI assistant swiftly addresses complex hardware challenges across the entire design stack, from concept to Bitstream/GDSII. With on-premise deployment and easily extendable knowledge base tailored to client-specific IPs, PrimisAI ensures an unparalleled hardware design experience.
                                            </p>
                                            <p>
                                                At the forefront of AI-driven Electronic Design Automation, PrimisAI revolutionizes the landscape with RapidGPT technology, making it an indispensable tool for in the engineering toolbox.
                                            </p>
                                        </div>                        
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
        </Layout>
    );
}
