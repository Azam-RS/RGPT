import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Videos from "../components/Videos/Videos";
import AboutUs from "../components/About/Aboutus/aboutus";
import Pricing from "../components/Pricing/pricing";
import styles from "./index.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel/Carousel";
import ContactUsForm from "../components/ContactUs/Contact-us";
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
                                        <TypingText
                                            text={`Welcome to the Future of Hardware Design`}
                                        />
                                </div>
                                <div className={styles.buttons}>
                                <Link
                                    className="button button--lg btn-doc btn-sp"
                                    to="https://getrapidgpt.primis.ai"
                                >
                                    Join for Free
                                </Link>
                                <Link
                                    className="button button--lg btn-doc"
                                    to="https://docs.primis.ai"
                                >
                                    Documentation
                                </Link>
                            </div>
                                <h2 className="title-txt">
                                    PrimisAI redefines the hardware landscape with its revolutionary RapidGPT. Explore our technology and unlock the future of advanced hardware design
                                </h2>
                            </div>
                        </div>
                        <div className="col col--12">
                            <Videos />
                            <Carousel />
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
                <div className="bg-sec-3">
                    <Pricing />
                    <div className="bg-sec-6"  id='contact-us'> 
                        <div className="folm-holder">
                            <ContactUsForm/>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
