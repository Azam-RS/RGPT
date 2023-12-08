import React, { useState, useEffect } from "react";
import "./aboutus.css";
const AboutUs = () => {
  const [refreshed, setRefreshed] = useState(false);
  const [initialContent, setInitialContent] = useState(""); // Variable to store initial HTML content

  const handleMouseOver = (event) => {
    const element = document.getElementById("chatmessages");
    const htmlContent = element.innerHTML;
    setInitialContent(htmlContent);
    element.innerHTML = htmlContent;
    setRefreshed(!refreshed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 1000 && scrollTop <= 1200) {
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
    <div className="">
      <div id="aboutus" className="line-holder">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="text--center padding-horiz--md">
                <div className="row">
                  <div className="col col--5">
                    <div className="cht-box" id="chatmessages">
                      <div className="c-area">
                        <div className="usermsg user_msg1 show_msg1">
                          <p>Empowering hardware Designer</p>
                        </div>
                        <div className="usermsg user_msg2 show_msg2">
                          <p>Increase productivity by 5x</p>
                        </div>
                        <div className="usermsg user_msg1 show_msg3">
                          <p> Unleash The Power of Rapid-GPT Today</p>
                        </div>
                      </div>
                      <div className="inputchat">
                        <span className="typemsg">Why choose RapidGPT?</span>
                        <i className="btnsend">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="21"
                            viewBox="0 0 23 21"
                            fill="none"
                          >
                            <path
                              d="M21.9519 9.71741L1.60849 0.0924104C1.44904 0.0169563 1.26994 -0.0132766 1.09276 0.00535228C0.915577 0.0239812 0.747862 0.0906774 0.609808 0.19741C0.477968 0.301966 0.379563 0.439249 0.325656 0.593824C0.271749 0.748399 0.264476 0.914139 0.304657 1.07241L2.75512 9.62116H13.2135V11.3712H2.75512L0.267668 19.8937C0.229965 20.0258 0.225564 20.1645 0.254819 20.2986C0.284074 20.4327 0.346169 20.5584 0.436111 20.6656C0.526053 20.7729 0.641332 20.8586 0.77268 20.916C0.904027 20.9734 1.04778 21.0009 1.19237 20.9962C1.33713 20.9953 1.47966 20.9624 1.60849 20.8999L21.9519 11.2749C22.1034 11.2015 22.2305 11.0899 22.3193 10.9525C22.4081 10.8151 22.455 10.6572 22.455 10.4962C22.455 10.3351 22.4081 10.1772 22.3193 10.0398C22.2305 9.9024 22.1034 9.79084 21.9519 9.71741Z"
                              fill="white"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="col col--7">
                    <div className="aboutus-holder">
                      <h3>
                        Unlock the Future of Hardware Design with PrimisAI
                      </h3>
                      <p>
                        PrimisAI is the premier destination for cutting-edge
                        hardware design automation.
                        <br />
                        <br /> Its generative AI solution is the ultimate
                        companion for hardware engineers, featuring advanced
                        Language-to-Code and Language-to-Verification
                        capabilities. PrimisAI’s interactive AI assistant
                        swiftly tackles complex hardware challenges, and covers
                        the entire design stack, from concept to
                        Bitstream/GDSII.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
