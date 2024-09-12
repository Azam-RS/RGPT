import React from "react";
import "./pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pricing = () => {
    return (
        <div>
            <div id="pricing" className="plan-pricing"></div>
            <div className="pri-sec">
                <div className="container">
                    <div className="row ">
                        <div className="col col--9 text--center mx-auto">
                            <div className="price-title">
                                <h1>Plans & Pricing</h1>
                                <p>
                                    Explore our tailored options to meet your hardware design needs.
                                </p>
                            </div>
                        </div>
                        <div className="col col--12">
                                    <div className="price-holder">
                                    <div className="planBox">
                                            <div className="p-Header">
                                                <p className="eb-txt">Free</p>
                                                <h1>
                                                    $0 <span className="small-txt"> / month</span>
                                                </h1>
                                            </div>
                                            <div className="p-Main">
                                                <div className="pList">
                                                    <ul>
                                                        <li>
                                                            <span className="iconchk">
                                                                <FontAwesomeIcon icon="check" />
                                                            </span>
                                                            <span className="plan-d">
                                                                Unlimited Messages
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="iconchk">
                                                                <FontAwesomeIcon icon="check" />
                                                            </span>
                                                            <span className="plan-d">
                                                                Unlimited Projects
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="iconchk">
                                                                <FontAwesomeIcon icon="check" />
                                                            </span>
                                                            <span className="plan-d">
                                                                Unlimited Chat Sessions
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="iconchk">
                                                                <FontAwesomeIcon icon="check" />
                                                            </span>
                                                            <span className="plan-d">
                                                            Free Forever
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="p-Footer">
                                                <div className="form-group text--center btnplan">
                                                    <a
                                                        href="https://getrapidgpt.primis.ai"
                                                        className="button  button--lg"
                                                    >
                                                        Choose Plan
                                                    </a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="planBox">
                                        <div className="p-Header">
                                            <p className="eb-txt mb-0">
                                                PRO <span className="badgetxt">Beta</span>
                                            </p>
                                            <span className="txtsmall_gray">
                                                Single User
                                            </span>
                                            <h1>
                                                $59.49{" "}
                                                <span className="small-txt"> / month</span>
                                            </h1>
                                            <p className="plandesc">
                                                * 15% off for annual subscriptions
                                            </p>
                                            <p className="plandesc txtplus">
                                                Everything in Free plan and...
                                            </p>
                                        </div>
                                        <div className="p-Main">
                                            <div className="pList">
                                                <ul className="prolist">
                                                <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            14-day trial period
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            More accurate answers
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            Third-Party IP Catalog with conversational documentation
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            AutoReview&trade;: AI-based HDL auditor
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">AutoComment&trade;: AI-generated comments for HDL files</span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">AutoDoc&trade;: AI-Powered project documentation builder</span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            Priority access to new features
                                                            and improvements
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">Priority support</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="p-Footer">
                                            <div className="form-group text--center btnplan">
                                                <a
                                                    href="https://getrapidgpt.primis.ai"
                                                    className="button  button--lg"
                                                >
                                                    Choose Plan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="planBox">
                                        <div className="p-Header">
                                            <p className="eb-txt">Team Pro </p>
                                            <h1>
                                                $50.99{" "}
                                                <span className="small-txt"> /seat/ month</span>
                                            </h1>
                                            <p className="plandesc ">
                                                * 15% off for annual subscriptions
                                            </p>
                                            <p className="plandesc txtplus">
                                                Everything in Pro Plan and...
                                            </p>
                                        </div>
                                        <div className="p-Main">
                                            <div className="pList">
                                                <ul className="prolist">
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            Admin dashboard access
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                        License management
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                        Members management
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                        Unified billing
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                        User level feature access
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                        RapidGPT resources allocation
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                        Minimum 4 seats
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="p-Footer">
                                            <div className="form-group text--center btnplan">
                                                <a href="https://getrapidgpt.primis.ai" className="button  button--lg">
                                                    Choose Plan
                                                </a>
                                            </div>
                                    </div>
                                                    
                                                    

                                                   
                                           
                                    </div>
                                    <div className="planBox">
                                        <div className="p-Header">
                                            <p className="eb-txt">Enterprise</p>
                                            <p className=" fplan">
                                                Secure, Private, and <br /> Self-Contained
                                            </p>
                                            <p className="plandesc txtplus">
                                                Everything in Team Pro Plan and...
                                            </p>
                                        </div>
                                        <div className="p-Main">
                                            <div className="pList">
                                                <ul>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            On-premise deployment: keep your data within your VPN
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            Extensible knowledge base: your IP fully integrated in RapidGPT
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            Customized support for your EDA tools
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            Customized training or fine-tuning: leverage your design practices and methodologies
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="iconchk">
                                                            <FontAwesomeIcon icon="check" />
                                                        </span>
                                                        <span className="plan-d">
                                                            Dedicated technical support and upgrades
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="p-Footer">

                                            <div className="form-group text--center btnplan">
                                                <a
                                                    href="mailto:info@primis.ai"
                                                    className="button  button--lg"
                                                >
                                                    Contact Us
                                                </a>
                                            </div>
                                         </div>
                                    </div>


                                        {/* <div className="form-area">
                                            <div className="plnfld">
                                                <div className="fld-holder">
                                                    <p className="eb-txt">Free</p>
                                                    <h1>
                                                        $0 <span className="small-txt"> / month</span>
                                                    </h1>
                                                    <div className="mb-3 planlist p1">
                                                        <ul>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Unlimited Messages
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Unlimited Projects
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Unlimited Chat Sessions
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                Free Forever
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="form-group text--center btnplan">
                                                        <a
                                                            href="https://getrapidgpt.primis.ai"
                                                            className="button  button--lg"
                                                        >
                                                            Choose Plan
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-area up-plan">
                                            <div className="plnfld">
                                                <div className="fld-holder">
                                                    <p className="eb-txt mb-0">
                                                        PRO <span className="badgetxt">Beta</span>
                                                    </p>
                                                    <span className="txtsmall_gray">
                                                        Single User
                                                    </span>
                                                    <h1>
                                                        $59.49{" "}
                                                        <span className="small-txt"> / month</span>
                                                    </h1>
                                                    <p className="plandesc stxt mb-0 f-bold">
                                                        15% off for annual subscriptions
                                                    </p>
                                                    <p className="plandesc stxt txtplus">
                                                        Everything in Free plan and...
                                                    </p>
                                                    <div className="mb-3 planlist">
                                                        <ul className="prolist">
                                                        <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    14-day trail period
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    More accurate answers
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Third-Party IP Catalog with conversational documentation
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    AutoReview&trade;: AI-based HDL auditor
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">AutoComment&trade;: AI-generated comments for HDL files</span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">AutoDoc&trade;: AI-Powered project documentation builder</span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Priority access to new features
                                                                    and improvements
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">Priority support</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="form-group text--center btnplan">
                                                        <a
                                                            href="https://getrapidgpt.primis.ai"
                                                            className="button  button--lg"
                                                        >
                                                            Choose Plan
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-area up-plan">
                                            <div className="plnfld">
                                                <div className="fld-holder">
                                                    <p className="eb-txt">Team Pro </p>
                                                    <h1>
                                                        $50.99{" "}
                                                        <span className="small-txt"> /seat/ month</span>
                                                    </h1>
                                                    <p className="plandesc stxt mb-0 f-bold">
                                                        * 15% off for annual subscriptions
                                                    </p>
                                                    <p className="plandesc stxt sp-bt">
                                                        Everything in Pro Plan and...
                                                    </p>
                                                    <div className="mb-3 planlist">
                                                        <ul className="prolist">
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Admin dashboard access
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                License management
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                Members management
                                                                </span>
                                                            </li>

                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                Unified billing
                                                                </span>
                                                            </li>

                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                User level feature access
                                                                </span>
                                                            </li>

                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                RapidGPT resources allocation
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                Minimum 4 seats
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="form-group text--center btnplan">
                                                    <a href="https://getrapidgpt.primis.ai" className="button  button--lg">
                                                            Choose Plan
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-area">
                                            <div className="plnfld">
                                                <div className="fld-holder">
                                                    <p className="eb-txt">Enterprise</p>
                                                    <p className="plandesc fplan">
                                                        Secure, Private, and <br /> Self-Contained
                                                    </p>
                                                    <p className="plandesc stxt txtplus">
                                                        Everything in Team Pro Plan and...
                                                    </p>
                                                    <div className="mb-3 planlist">
                                                        <ul>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    On-premise deployment: keep your data within your VPN
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Extensible knowledge base: your IP fully integrated in RapidGPT
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Customized support for your EDA tools
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Customized training or fine-tuning: leverage your design practices and methodologies
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="iconchk">
                                                                    <FontAwesomeIcon icon="check" />
                                                                </span>
                                                                <span className="plan-d">
                                                                    Dedicated technical support and upgrades
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="form-group text--center btnplan">
                                                        <a
                                                            href="mailto:info@primis.ai"
                                                            className="button  button--lg"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
