import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import "../Editorhome/editorhome.css";
import ExampleOne from "./Example/ExampleOne";
import ExampleTwo from "./Example/ExampleTwo";
import ExampleThree from "./Example/ExampleThree";
import ExampleFour from "./Example/ExampleFour";
import ExampleFive from "./Example/ExampleFive";

// typing text animation
function TypingText({ text }) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 15);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, text]);

    return (
        <div className="cmntTxt" style={{ whiteSpace: "pre-line" }}>
            {displayText}
        </div>
    );
}
// typing text animation
const Exampletabone = () => {
    return (
        <div>
            <div>
                <pre className="r-space" id="displayTab1">
                    <code className="">
                        <div className="srno">1 </div>
                        <TypingText
                            text={` /* Write a verilog design for an APB based memory */`}
                        />
                        <ExampleOne />
                    </code>
                </pre>
            </div>
        </div>
    );
};

const Exampletabtwo = () => {
    return (
        <div>
            <pre className="r-space" id="displayTab2">
                <code className="">
                    <span className="srno">1 </span>
                    <TypingText
                        text={` /* Write a verilog testbench to verify the complete functionality of the PWM Generator */`}
                    />
                    <ExampleTwo />
                </code>
            </pre>
        </div>
    );
};
const Exampletabthree = () => {
    return (
        <div>
            <pre className="r-space" id="displayTab2">
                <code className="">
                    <span className="srno">1 </span>
                    <TypingText
                        text={` /* Design a Verilog code for a PWM generator operating with a 100MHz clock frequency, generating a 10MHz PWM signal with a variable duty cycle (default 50%). The design should include two synchronous, active-high buttons for duty cycle control. The first button increases the duty cycle by 10%, while the second button decreases it by 10%. Duty cycle should wrap around when it reaches 100% or 0%. Buttons are debounced for reliable operation. */`}
                    />
                    <ExampleThree />
                </code>
            </pre>
        </div>
    );
};
const Exampletabfour = () => {
    return (
        <div>
            <pre className="r-space" id="displayTab2">
                <code className="">
                    <span className="srno">1 </span>
                    <TypingText
                        text={` /* Design a Verilog system for a simple traffic light with smooth transitions between red, green, and yellow using state machines. Write clear and efficient code to mimic real traffic light behavior. */`}
                    />
                    <ExampleFour />
                </code>
            </pre>
        </div>
    );
};
const Exampletabfive = () => {
    return (
        <div>
            <pre className="r-space" id="displayTab2">
                <code className="">
                    <span className="srno">1 </span>
                    <TypingText
                        text={` /* Generate a Verilog design for a complex multiplier module named comp_mult, which computes the product of two complex numbers represented by (ar+i.ai) and (br+i.bi). The design includes clocked registers for input signals, separate blocks for real and imaginary product calculations, and output signals pr (real part) and pi (imaginary part). Adjust the parameterized widths for input and output signals as needed. */`}
                    />
                    <ExampleFive />
                </code>
            </pre>
        </div>
    );
};

const EditorHome = () => {
    const [refreshed, setRefreshed] = useState(true);
    const [initialContent, setInitialContent] = useState("");

    // rerun animation on tab click
    useEffect(() => {
        const handleTabItemClick = (event) => {
            const targetClassList = event.target.classList;
            if (targetClassList.contains("tabs__item")) {
                handleRefreshClick();
            }
        };

        // Add the event listener to the document
        document.addEventListener("click", handleTabItemClick);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleTabItemClick);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    const handleRefreshClick = () => {
        var edTabContainer = document.querySelector(".ed-tab");

        if (edTabContainer) {
            var activeTab = edTabContainer.querySelector(".tabs__item--active");
            if (activeTab.textContent.trim() == "Chat") {
                setRefreshed(!refreshed);
                setTimeout(() => {
                    setRefreshed(refreshed);
                }, 10);
            } else {
                setRefreshed(!refreshed);
                setTimeout(() => {
                    setRefreshed(refreshed);
                }, 10);
            }
            // In condition "Tab 3" right side is must be a text of Tab 3
        }
    };
    // rerun animation on tab click
    return (
        <div className="editor-holder">
            <div className="bg-editor">
                <div className="container">
                    <div className="row">
                        <div className="col col--12 plr-0">
                            <div className="text--center padding-horiz--md">
                                <div className="img-holder ed-tab">
                                    <button
                                        type="button"
                                        onClick={() => handleRefreshClick()}
                                        className="btn-reply rewrite"
                                    >
                                        Replay
                                    </button>
                                    <Tabs>
                                        <TabItem
                                            value="APB_Memory"
                                            label="APB Memory"
                                            default
                                            className="accord-holder"
                                        >
                                            {refreshed && <Exampletabone />}
                                        </TabItem>
                                        <TabItem
                                            value="PWMGenerator"
                                            label="PWM Generator"
                                            className="accord-holder"
                                        >
                                            {refreshed && <Exampletabthree />}
                                        </TabItem>
                                        <TabItem
                                            value="PWMGenerator_tb"
                                            label="PWM Generator Testbench"
                                            className="accord-holder"
                                        >
                                            {refreshed && <Exampletabtwo />}
                                        </TabItem>
                                        <TabItem
                                            value="TrafficLight"
                                            label="Traffic Light"
                                            className="accord-holder"
                                        >
                                            {refreshed && <Exampletabfour />}
                                        </TabItem>
                                        <TabItem
                                            value="comp_mult"
                                            label="Complex Multiplier"
                                            className="accord-holder"
                                        >
                                            {refreshed && <Exampletabfive />}
                                        </TabItem>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorHome;
