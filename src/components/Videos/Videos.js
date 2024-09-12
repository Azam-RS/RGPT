import React, { useState, useEffect } from "react";
import "./Videos.css";
import RadioButtonList from "./RadioButtonList";
const Videos = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentDiv, setCurrentDiv] = useState(1);

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentDiv((prevDiv) => (prevDiv % 5) + 1);
            }, 35000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isHovered]);

    const handleOptionChange = (value) => {
        setCurrentDiv(value);
    };
    return (
        <div>
            <div className="vid-sec">
                <div id="features"></div>
                <div className="container">
                    <div className="row">
                        <div className="col col--12">
                            <div
                                className="video-holder"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => {
                                    setIsHovered(false);
                                }}
                            >

                                <div className="desc-feat">
                                    <div className="row">

                                        <div className="col col--12 mx-auto title-video">
                                            {currentDiv === 1 && (
                                                <div>
                                                    <h4>Intelligent Code Assistant</h4>
                                                    <p className="vdesc">
                                                        Your Ideas in Words, Our Code in Verilog. Effortless, Efficient, Intelligent. Now Enhanced with Third-Party IPs.
                                                    </p>
                                                    <div id="Div1" className={`sec-video`}>
                                                        <video width="100%" height="auto" preload="auto" autoPlay muted loop playsInline>
                                                            <source src="/videos/web/features/ip-catalog.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            )}

                                            {currentDiv === 2 && (
                                                <div>
                                                    <h4>Interactive Chat</h4>
                                                    <p className="vdesc">
                                                        Enhance Your Verilog Code Seamlessly with RapidGPT's Conversational Power.
                                                    </p>
                                                    <div id="Div2" className={`sec-video`}>
                                                        <video width="100%" height="auto" preload="auto" autoPlay muted loop playsInline>
                                                            <source src="/videos/web/features/interactive-chat.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            )}
                                            {currentDiv === 3 && (
                                                <div>
                                                    <h4>AutoDoc&trade;</h4>
                                                    <p className="vdesc">
                                                        Tailored Precision for Comprehensive Projects Documentation.
                                                    </p>
                                                    <div id="Div3" className={`sec-video`}>
                                                        <video width="100%" height="auto" preload="auto" autoPlay muted loop playsInline>
                                                            <source src="/videos/web/features/autodoc-project.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            )}

                                            {currentDiv === 4 && (
                                                <div>
                                                    <h4>AutoComment&trade;</h4>
                                                    <p className="vdesc">
                                                        Seamlessly Add Detailed Annotations to Any HDL File.
                                                    </p>
                                                    <div id="Div4" className={`sec-video`}>
                                                        <video width="100%" height="auto" preload="auto" autoPlay muted loop playsInline>
                                                            <source src="/videos/web/features/autodoc-files.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            )}
                                            {currentDiv === 5 && (
                                                <div>
                                                    <h4>AutoReview&trade;</h4>
                                                    <p className="vdesc">
                                                        Elevating Verilog Coding Standards with Dynamic Precision and Effortless Correction.
                                                    </p>
                                                    <div id="Div5" className={`sec-video`}>
                                                        <video width="100%" height="auto" preload="auto" autoPlay muted loop playsInline>
                                                            <source src="/videos/web/features/syntax.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="text--center">
                                    <RadioButtonList
                                        selectedOption={currentDiv}
                                        onOptionChange={handleOptionChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;
