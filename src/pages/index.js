// import React from 'react';
import React, { useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import About from "../components/About/about";
import WhyChooseRGPT from "../components/WhyChooseRGPT/WhyChooseRGPT";
import Pricing from "../components/Pricing/pricing";
import FAQ from "../components/FAQ/faq";
import Footer from "../components/Footer/footer";
import styles from "./index.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../static/js/custom";

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
              <h1 className="hero__title">{siteConfig.title}</h1>
              <h1 className="hero__title">{siteConfig.tagline}</h1>
              <div className={styles.buttons}>
                <Link
                  className="button  button--lg btn-default"
                  to="https://rapidgpt.rapidsilicon.com/user/Login"
                >
                  Sign up
                </Link>
                <Link
                  // className="button button--secondary button--lg  btn-up" to="/docs/intro">
                  className="button button--lg  btn-default btn-doc"
                  to="#about"
                >
                  Learn More
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
                  <p className="textStyle">Language to code</p>
                  <div className="redLine"></div>
                  <p className="textStyle">Intuitive and Efficient</p>
                  <div className="redLine"></div>
                  <p className="textStyle">Contextual Suggestions</p>
                  <div className="redLine"></div>
                  <p className="textStyle">Streamline Coding Process</p>
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

  // return (
  //   <Layout
  //     title={`Hello from ${siteConfig.title}`}
  //     description="Description will go into a meta tag in <head />">
  //     <HomepageHeader />
  //     <main>
  //       <HomepageFeatures />
  //     </main>
  //   </Layout>
  // );
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="bg-sec-1">
          <About />
        </div>
        <div className="bg-sec-2">
          <WhyChooseRGPT />
        </div>
        <div className="bg-sec-3">
          <Pricing />
        </div>
        <div className="bg-sec-4">
          <FAQ />
        </div>
        {/* <HomepageFeatures /> */}
      </main>
      <Footer />
    </Layout>
  );
}
