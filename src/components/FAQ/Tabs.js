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
        <TabItem value="General" label="General" default>
          <Accordion
            title="What is an FAQ section?"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur."
            expanded={expandedAccordionIndex === 0}
            onToggle={() => handleAccordionToggle(0)}
          />
          <Accordion
            title="What is an FAQ section?"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur."
            expanded={expandedAccordionIndex === 1}
            onToggle={() => handleAccordionToggle(1)}
          />
          <Accordion
            title="What is an FAQ section?"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur."
            expanded={expandedAccordionIndex === 2}
            onToggle={() => handleAccordionToggle(2)}
          />
        </TabItem>
        <TabItem value="Category" label="Category">
          <Accordion
            title="What is an Category section?"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur."
            expanded={expandedAccordionIndex === 3}
            onToggle={() => handleAccordionToggle(3)}
          />
          <Accordion
            title="What is an Category section?"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur."
            expanded={expandedAccordionIndex === 4}
            onToggle={() => handleAccordionToggle(4)}
          />
          <Accordion
            title="What is an Category section?"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis hic impedit veritatis rerum, eligendi voluptates porro maxime eveniet vel! Similique eveniet dicta hic rerum explicabo quidem aliquid nostrum architecto pariatur."
            expanded={expandedAccordionIndex === 5}
            onToggle={() => handleAccordionToggle(5)}
          />
        </TabItem>
      </Tabs>
    </div>
  );
};

export default TabsArea;
