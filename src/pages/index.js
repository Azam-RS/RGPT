// import React from 'react';
import React, { useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import EditorHome from "../components/Editorhome/editorhome";
import AboutUs from "../components/About/Aboutus/aboutus";
import Vision from "../components/About/Vision/vision";
import Team from "../components/About/Team/team";

import Features from "../components/Features/Features";
import Pricing from "../components/Pricing/pricing";
import FAQ from "../components/FAQ/faq";
import Resources from "../components/Resources/Resources";
import Footer from "../components/Footer/footer";
import styles from "./index.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div id="home" className="sec-holder">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}> */}
      <header className={clsx("", styles.heroBanner)}>
        <div className="h-inv"></div>
        <div className="container">
          <div className="row mob-center text--left">
            <div className="col col--12">
              <h1 className="hero__title seagreen">RapidGPT</h1>
              <h1 className="hero__title">Your Ultimate HDL Pair-Designer</h1>
              <div className={styles.buttons}>
                <Link
                  className="button  button--lg btn-default"
                  to="https://getrapidgpt.primis.ai/user/login"
                >
                  Sign In
                </Link>
                <Link
                  className="button button--lg  btn-default btn-doc"
                  to="/docs/getting-started"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="tile-holder">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <div className="infoBanner columnContainer">
                  <div className="redLine"></div>
                  <p className="textStyle">Language-to-HDL</p>
                  <div className="redLine"></div>
                  <p className="textStyle">Interactive AI Assistant</p>
                  <div className="redLine"></div>
                  <p className="textStyle">Contextual Suggestions</p>
                  <div className="redLine"></div>
                  <p className="textStyle">Streamlined Design Process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="img-holder"></div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="The industry’s first AI-based pair-designer tailored for FPGA engineers."
    >
      <HomepageHeader />
      <main>
        <div className="bg-sec-01">
          <AboutUs />
        </div>
        <div className="bg-sec-02">
          <Vision />
        </div>
        <div className="bg-sec-03">
          <Team />
        </div>
        <div className="bg-sec-2">
          <EditorHome />
          <Features />
        </div>
        <div className="bg-sec-3">
          <Pricing />
        </div>
        <div className="bg-sec-4">
          <FAQ />
        </div>
        <div className="bg-sec-5">
          <Resources />
        </div>
        {/* <HomepageFeatures /> */}
      </main>
      <Footer />
    </Layout>
  );
}
