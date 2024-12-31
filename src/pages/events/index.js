import React from "react";
import Layout from "@theme/Layout";
import "./events.css";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
export default function Events() {
    const openPdf = (url) => {
        window.open(url, '_blank', 'noopener');
    };

    return (
        <Layout title="Events">
            <div className="event-holder">
                <div className="abt-b-txt"><h1>Events</h1>
                    <p>Experience Innovation Firsthand <br /> Join PrimisAI at Our Upcoming Events</p>
                </div>
            </div>
            <div className="paper-box">
                <div className="container">
                    <div className="row">
                        <div className="col col--12 text--start">
                            <div className="jb-title">
                                <h1>Upcoming Events</h1>
                            </div>
                        </div>
                        <div className="col col--12">
                            <div className="desc-area">
                                <div className="paper-title">
                                    <h1>Live Online Workshop</h1>
                                    <div className="paper-desc">
                                        <h3>Join us for a live webinar where we will
                                            hands-on show how to get<br />the most
                                            out of AI-Assistance in real-world
                                            scenarios.</h3>
                                    </div>
                                    <div className="event-bg"></div>
                                    <div className="read-btn">
                                        <button className="btn-more" title="Read More" onClick={() => openPdf('/img/pdf/workshop-flyer.pdf')}>Zoom In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}