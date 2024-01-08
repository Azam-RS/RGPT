import React from "react";
import Layout from "@theme/Layout";
import "./about-us.css";

export default function AboutPrimis() {
    return (
        <Layout title="About PrmisAi" description="About PrimisAI">
            <div className="aboutContainer">
                <div className="container">
                    <div className="row">
                        <div className="col col--12">
                            <div className="abt-holder">
                                <h1>
                                    Empowering{" "}
                                    <span style={{ color: "rgba(50, 224, 223, 1)" }}>
                                        Innovation{" "}
                                    </span>
                                    through Cutting-Edge{" "}
                                    <span style={{ color: "rgba(50, 224, 223, 1)" }}>
                                        Generative AI{" "}
                                    </span>{" "}
                                    in Hardware Design
                                </h1>
                                <div className="thumbnailBox">
                                    <div className="row">
                                        <div className="col col-4">
                                            <div className="thumbicon">
                                                <div>
                                                    <img src="/img/code.png" alt="icon" />
                                                </div>
                                                <p>Code Optimization</p>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="thumbicon">
                                                <div>
                                                    <img src="/img/conversation.png" alt="icon" />
                                                </div>
                                                <p>Conversational Capabilities</p>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="thumbicon">
                                                <div>
                                                    <img src="/img/suggestion.png" alt="icon" />
                                                </div>
                                                <p>Contextual Suggestions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col col--6">
                                        <div className="desc-about">
                                            <h1>About PrimisAI</h1>
                                            <p>
                                                PrimisAI stands at the cutting edge of AI-driven Electronic Design Automation, redefining the landscape with its revolutionary RapidGPT technology. This avant-garde approach, known as the Language-to-Silicon paradigm, is transforming hardware engineering, allowing engineers to effortlessly translate their innovative visions into tangible designs. Our sophisticated AI assistant is adept at mastering and streamlining the complexities of advanced hardware design, making it an indispensable tool in the engineering toolbox.</p>
                                        </div>
                                    </div>
                                    <div className="col col--6 text--center">
                                        <img src="/img/graph.png" alt="graph" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col--12">
                                        <div className="desc-about">
                                            <h1>Mission</h1>
                                            <p>
                                                Our mission extends beyond traditional design automation. We are committed to revolutionizing the entire design journey, guiding projects from the initial concept to the final Bitstream/GDSII stages. PrimisAI’s interactive AI assistant not only offers exceptional Language-to-Code capabilities but also automatic documentation generation, and other advanced features providing comprehensive support across the entire design spectrum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col--12">
                                        <div className="desc-about">
                                            <h1>Distinctive Traits</h1>
                                            <p>
                                                What sets PrimisAI apart is its focus on revolutionizing the design process as a whole. While robust on-premise deployment options and a customizable knowledge base remain integral features, especially for integrating client-specific third-party IPs, our core emphasis is on empowering engineers to bring their visions to life with unprecedented efficiency and customization. With PrimisAI, the possibilities in hardware design are not just boundless but also tailored to meet the evolving needs of the industry, paving the way for a new era of efficiency, customization, and accessibility in hardware design.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
