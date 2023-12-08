import React from "react";
import Layout from "@theme/Layout";
import "./news.css";
import Footer from "@site/src/components/Footer/footer";

export default function News() {
  return (
    <Layout title="News" description="News Page">
      <div className="news-holder">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1>
                PrimisAI Forms to Revolutionize Hardware Design with Leading AI
                Solutions
              </h1>
              <p>
                <span className="bld-txt">
                  LOS GATOS, Calif., Sept 26, 2023 – PrimisAI,
                </span>{" "}
                a pioneering newcomer to the hardware design landscape, is
                thrilled to announce its official launch. The company debuts
                with pushing forward the development and commercialization of
                the groundbreaking generative AI-based tool, RapidGPT, designed
                to revolutionize FPGA design. PrimisAI's RapidGPT innovative
                solution empowers hardware designers with a natural language
                interface, enhancing productivity and accelerating
                time-to-market. This advanced technology fosters a more
                intuitive interaction with hardware description language (HDL)
                by understanding RTL and verification engineers' intent and
                offering context-aware suggestions.
              </p>
              <p className="green-txt">
                "We're excited to introduce PrimisAI and share our vision with
                the world," said Pierre-Emmanuel Gaillardon, CEO of PrimisAI.
                "Our team is eager to unveil our FPGA design solutions and
                expand our mission into broader domains of design, verification,
                and EDA for both FPGA and ASIC targets."
              </p>
              <p>
                PrimisAI's launch signifies a pivotal moment in the hardware
                design industry, offering technical professionals access to
                cutting-edge generative AI solutions that drive efficiency and
                innovation. For more information about PrimisAI and RapidGPT,
                please visit{" "}
                <a href="https://primis.ai" className="n-link">
                  primis.ai
                </a>
              </p>
              <h4>About PrimisAI</h4>
              <p>
                PrimisAI is the premier destination for cutting-edge hardware
                design automation. Its generative AI solution is the ultimate
                companion for hardware engineers, featuring advanced
                Language-to-Code and Language-to-Verification capabilities.
                PrimisAI's interactive AI assistant swiftly tackles complex
                hardware challenges, and covers the entire design stack, from
                concept to Bitstream/GDSII. What sets PrimisAI apart is its
                on-premise deployment capabilities and its easily extendable
                knowledge base, catering to client-specific IPs, ensuring the
                customer hardware design experience is unparalleled. With
                PrimisAI, the future and accessibility of hardware design has no
                limits. For more information, please visit{" "}
                <a href="https://primis.ai" className="n-link">
                  primis.ai
                </a>
                .
              </p>
              <div className="regds">
                <p>Media Contact</p>
                <p>Diana Kandah</p>
                <p>diana@primis.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
