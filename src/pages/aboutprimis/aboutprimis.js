import React from "react";
import Layout from "@theme/Layout";
import Footer from "../../components/Footer/footer";
import "./aboutprimis.css";

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
                      <h3>About Primis aI</h3>
                      <p>
                        Primis AI is the premier destination for cutting-edge
                        hardware design automation. Its generative AI solution
                        is the ultimate companion for hardware engineers,
                        featuring advanced Language-to-Code and
                        Language-to-Verification capabilities. Primis AI’s
                        interactive AI assistant swiftly tackles complex
                        hardware challenges, and covers the entire design stack,
                        from concept to Bitstream/GDSII.
                      </p>
                      <p>
                        What sets Primis AI apart is its on-premise deployment
                        capabilities and its easily extendable knowledge base,
                        catering to client-specific IPs, ensuring the customer
                        hardware design experience is unparalleled. With Primis
                        AI, the future and accessibility of hardware design has
                        no limits.
                      </p>
                    </div>
                  </div>
                  <div className="col col--6">
                    <div className="statbox statbox2">
                      <h2 className="g-txt">25+</h2>
                      <span className="smtxt">Features</span>
                    </div>
                    <div className="statbox">
                      <h2 className="g-txt">150M+</h2>
                      <span className="smtxt">Registered Users</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col--12">
                    <div className="desc-about">
                      <h3>Mission</h3>
                      <p>
                        Our mission is to revolutionize the way hardware
                        designers interact with hardware description language
                        (HDL). With our natural language interface, we empower
                        designers to communicate their intent in a more
                        intuitive and efficient manner. Gone are the days of
                        exhaustive searches for syntax, semantics, and
                        documentation. RapidGPT understands your commands and
                        provides relevant suggestions, eliminating the need for
                        tedious manual searches. Our intelligent code
                        autocompletion feature takes it a step further by
                        offering contextual suggestions based on your code,
                        ensuring error-free and streamlined code writing. With
                        RapidGPT, we aim to enhance the productivity and
                        creativity of hardware designers by simplifying their
                        workflow and enabling them to focus on what truly
                        matters - bringing innovative designs to life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
