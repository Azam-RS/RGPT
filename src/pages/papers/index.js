import React from "react";
import Layout from "@theme/Layout";
import "./paper.css";

export default function Papers() {

  const handleRedirect = (url) => {
    window.open("https://arxiv.org/abs/2409.11411", '_blank', 'noopener');
  };
  const openPdf = (url) => { 
    window.open(url, '_blank', 'noopener');
  };
  return (
    <Layout title="Papers">
      <div className="paper-holder">
        <div className="abt-b-txt">
          <h1>Papers</h1>
          <p>Discover Innovation: Explore the Latest Scientific <br /> ​Breakthroughs from PrimisAI Minds</p>
        </div>
      </div>
      <div className="paper-box">
        <div className="container">
          <div className="row">
            <div className="col col--12 text--start">
              <div className="jb-title">
                <h1>Our Papers</h1>
              </div>
            </div>
            {/* paper AIVRIL */}
            <div className="col col--12">
              <div className="desc-area">
                <div className="paper-title">
                  <h1>AIVRIL: AI-DRIVEN RTL GENERATION WITH VERIFICATION IN-THE-LOOP</h1>
                  <p>Mubashir ul Islam¹, Humza Sami¹, Pierre-Emmanuel Gaillardon¹˒², and Valerio Tenace¹</p>
                  <p>¹PrimisAI, Los Gatos, CA, USA</p>
                  <p>²University of Utah, Salt Lake City, UT, USA</p>
                  <div className="conf-bg"></div>
                </div>
                <div className="paper-desc">
                  <h4>Abstract:</h4>
                  <p>Large Language Models (LLMs) are computational models capable of performing complex natural language processing tasks. Leveraging these capabilities, LLMs hold the potential to transform the entire hardware design stack, with predictions suggesting that front-end and back-end tasks could be fully automated in the near future. Currently, LLMs show great promise in streamlining Register Transfer Level (RTL) generation, enhancing efficiency, and accelerating innovation. However, their probabilistic nature makes them prone to inaccuracies—a significant drawback in RTL design, where reliability and precision are essential.</p>
                  <p>To address these challenges, this paper introduces AIVRIL, an advanced framework designed to enhance the accuracy and reliability of RTL-aware LLMs. AIVRIL employs a multi-agent, LLM- agnostic system for automatic syntax correction and functional verification, significantly reduc- ing—and in many cases, completely eliminating—instances of erroneous code generation. Experi- mental results conducted on the VerilogEval-Human dataset show that our framework improves code quality by nearly 2× when compared to previous works, while achieving an 88.46% success rate in meeting verification objectives. This represents a critical step toward automating and optimizing hardware design workflows, offering a more dependable methodology for AI-driven RTL design.</p>
                </div>
                <div className="dwn-btn">
                  <button className="btn-more" title="Read More" onClick={handleRedirect}>Read More</button>
                </div>
              </div>
            </div>

            {/* Fully Automating Chip Design */}
            <div className="col col--12">
              <div className="desc-area">
                <div className="paper-title">
                  <h1>Fully Automating Chip Design</h1>
                  <p>Hans Bouwmeester</p>
                  <p>PrimisAI, COO</p>
                  <div className="chipdesign-bg"></div>
                </div>
                <div className="paper-desc">
                  <h4>Summary:</h4>
                  <p>Twenty-five years ago, SEMATECH first alerted the world to a concern known as the design productivity gap: the observation that
the ability to manufacture complex chips had started outpacing the capability of designers to create them by more than a factor
of two. This concern was subsequently reiterated in the ITRS report of 1999 and discussed and reported on in many articles during
the past two decades.</p>
<p>In recent years, generative AI in general and natural language processing more specifically have taken the world by storm,
opening-up a wealth of possible applications, including chip design. </p>
<p>But will it be enough to finally start closing the productivity gap, where continuous improvements in EDA and the application of IP-
reuse have done nothing more than decelerate its growth somewhat? This article presents a comprehensive overview, showing
that generative AI will indeed finally close the design productivity gap and even enable us to fully automate hardware design.</p>
                </div>
                <div className="dwn-btn">
                  <button className="btn-more" title="Read More"onClick={() => openPdf('/img/pdf/fully-automating-chip-design.pdf')}>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
