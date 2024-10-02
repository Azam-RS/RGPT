import React from "react";
import Layout from "@theme/Layout";
import "./articles.css";

export default function Articles() {
    const openPdf = (url) => { 
        window.open(url, '_blank', 'noopener');
      };
  return (
    <Layout title="Articles">
      <div className="article-holder">
        <div className="abt-b-txt">
          <h1>Articles</h1>
          <p>Discover Fresh Perspectives and Stories <br/> from the Minds Driving AI Innovation</p>
        </div>
      </div>
      <div className="article-box">
        <div className="container">
          <div className="row">
            <div className="col col--12 text--start">
              <div className="article-title">
                <h1>Our Articles</h1>
              </div>
            </div>
            <div className="col col--12">
              <div className="desc-area">
                <div className="article-title">
                  <h1>Fully Automating Chip Design</h1>
                  <p>Hans Bouwmeester</p>
                  <p>PrimisAI, COO</p>
                  <div className="chipdesign-bg"></div>
                </div>
                <div className="article-desc">
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
                <div className="read-btn">
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
