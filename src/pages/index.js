import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import EditorHome from "../components/Editorhome/editorhome";
import AboutUs from "../components/About/Aboutus/aboutus";
import Features from "../components/Features/Features";
import Pricing from "../components/Pricing/pricing";
import Resources from "../components/Resources/Resources";
import styles from "./index.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel/Carousel";
library.add(faCheck);

function TypingText({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <h1 className="hero__title" style={{ whiteSpace: "pre-line" }}>
      {displayText}
    </h1>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [showTypingText, setShowTypingText] = useState(true);

  const handleMouseOver = () => {
    // Refresh the TypingText when hovering
    setShowTypingText(false);
    setTimeout(() => {
      setShowTypingText(true);
    }, 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 0 && scrollTop <= 30) {
        handleMouseOver();
      }
    };
    const interval = setInterval(() => {
      handleMouseOver();
    }, 10000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="sec-holder">
      <header className={clsx("", styles.heroBanner)}>
        <div className="h-inv"></div>
        <div className="container">
          <div className="row mob-center text--center">
            <div className="col col--12">
              <div className="">
                <div className="hero__title">
                  {showTypingText ? (
                    <TypingText
                      text={`The Future.... of Hardware Design is Here.`}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h2 className="title-txt">
                  RapidGPT is the industry's first AI-based pair-designer
                  tailored for hardware engineers.{" "}
                </h2>
              </div>
              <div className={styles.buttons}>
                <Link
                  className="button button--lg btn-doc btn-sp"
                  to="https://rgptstaging.rapidsilicon.com/"
                >
                  Sign Up
                </Link>
                <Link
                  className="button button--lg btn-doc"
                  to="/docs/getting-started"
                >
                  Documentation
                </Link>
              </div>
            </div>
            <div className="col col--12">
              <EditorHome />
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
          <Carousel />
        </div>
        <div className="bg-sec-2">
          <Features />
        </div>
        <div className="bg-sec-3">
          <Pricing />
        </div>
        <div className="bg-sec-5">
          <Resources />
        </div>
      </main>
    </Layout>
  );
}
