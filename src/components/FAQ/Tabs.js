import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import "../../../src/components/FAQ/tabs.css";

import Accordion from "./Accordion";
const TabsArea = () => {
    const [expandedAccordionIndex, setExpandedAccordionIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        setExpandedAccordionIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
    };
    return (
        <div>
            <Tabs>
                <TabItem value="Product" label="Product" default>
                    <Accordion
                        title="How does RapidGPT generate Verilog code?"
                        content="RapidGPT utilizes advanced AI algorithms and natural language processing techniques to understand the intent and context of your request. It then converts your descriptions or comments into Verilog code by applying industry best practices, design patterns, and recommended coding conventions."
                        expanded={expandedAccordionIndex === 0}
                        onToggle={() => handleAccordionToggle(0)}
                    />
                    <Accordion
                        title="How can RapidGPT assist with hardware design?"
                        content="RapidGPT can assist hardware designers by providing intelligent code suggestions and generating Verilog code based on design intent. It understands natural language and can convert descriptions or comments into complete HDL code. You can simply write a comment or describe the desired functionality, and RapidGPT will provide you with the corresponding code."
                        expanded={expandedAccordionIndex === 1}
                        onToggle={() => handleAccordionToggle(1)}
                    />
                    <Accordion
                        title="Does RapidGPT provide code optimization suggestions?"
                        content="Yes, RapidGPT can identify potential errors or inconsistencies in your code and provide suggestions for optimization. It analyzes your code and offers context-aware suggestions tailored to your specific design requirements. By leveraging RapidGPT's code optimization capabilities, you can catch and fix issues early in the design process, ensuring high-quality and efficient hardware designs."
                        expanded={expandedAccordionIndex === 2}
                        onToggle={() => handleAccordionToggle(2)}
                    />
                    <Accordion
                        title="How can I get help or support for RapidGPT?"
                        content={
                            <span>
                                If you encounter any issues or need assistance with RapidGPT, there are a few ways you can get help:
                                <ul>
                                    <li>Check out the <a href="/docs">RapidGPT documentation</a> for detailed instructions and examples.</li>
                                    <li>Reach out to the support team by sending an email to <a href="mailto:support@rapidsilicon.com.hs-inbox.com">support@rapidsilicon.com.hs-inbox.com</a>.</li>
                                </ul>
                                Our support team is dedicated to helping you get the most out of RapidGPT and ensuring a smooth experience.<br />
                                If you have any further questions or need additional assistance, feel free to ask!
                            </span>
                        }
                        expanded={expandedAccordionIndex === 3}
                        onToggle={() => handleAccordionToggle(3)}
                    />
                </TabItem>
                <TabItem value="Subscription" label="Subscription" default>
                    <Accordion
                        title="Is RapidGPT available for free?"
                        content="Yes, RapidGPT is currently available for free. Our goal is to provide access to powerful hardware design assistance to as many hardware engineers as possible."
                        expanded={expandedAccordionIndex === 0}
                        onToggle={() => handleAccordionToggle(0)}
                    />
                    <Accordion
                        title="Will there be paid subscription plans in the future?"
                        content="Yes, we are actively working on introducing paid subscription plans for RapidGPT in the future. These plans will offer additional features and benefits to users who choose to upgrade."
                        expanded={expandedAccordionIndex === 1}
                        onToggle={() => handleAccordionToggle(1)}
                    />
                    <Accordion
                        title="Will the free version of RapidGPT still be available?"
                        content="Absolutely! We will continue to offer a free version of RapidGPT to ensure that hardware engineers can always access the basic features and benefits of our platform without any cost."
                        expanded={expandedAccordionIndex === 2}
                        onToggle={() => handleAccordionToggle(2)}
                    />
                </TabItem>
            </Tabs>
        </div>
    );
};

export default TabsArea;



