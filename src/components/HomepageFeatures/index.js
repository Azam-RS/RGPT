import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "EMPOWERING HARDWARE DESIGNERS",
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        RapidGPT provides a natural language interface that empowers hardware
        designers to interact with hardware description language (HDL) in a more
        intuitive and efficient way. RapidGPT understands the intent of
        designers’ commands and provides relevant suggestions, eliminating the
        need for exhaustive searches for syntax, semantics, and documentation.
        Our tool’s intelligent code autocompletion feature provides contextual
        suggestions based on your code, removing errors, and streamlining the
        code writing process.
      </>
    ),
  },
  {
    title: "Increase productivity by 5x",
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our AI-based approach leverages advanced natural language processing to
        enable code autocompletion, and conversational features, enabling FPGA
        designers to work more effectively and efficiently than ever before.
        With RapidGPT, designers can focus on their expertise and create
        ground-breaking designs that transform industries.
      </>
    ),
  },
  {
    title: "UNLEASH THE POWER OF RAPID-GPT TODAY",
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        RapidGPT is the ultimate HDL from the future that empowers FPGA
        designers to unleash their creativity and design high-quality products
        faster. By reducing friction in the FPGA design process, RapidGPT allows
        designers to optimize their solutions and increase their productivity
        and reduce time-to-market.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--12  desc-detail")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
