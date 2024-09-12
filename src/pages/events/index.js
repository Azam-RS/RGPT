import React  from "react";
import Layout from "@theme/Layout";
import "./events.css";
export default function Events() {

  return (
    <Layout title="Events">
      <div className="event-holder">
      <div className="abt-b-txt"><h1>Events</h1>
      <p>Experience Innovation Firsthand <br/> Join PrimisAI at Our Upcoming Events</p>
        </div>
      </div>
      <div className="event-box">
        <div className="container">
          <div className="row">
            <div className="col col--12 text--start">
              <div className="jb-title">
                <h1>Stay tuned for upcoming events</h1>
              </div>
            </div>
              {/* <div className="col col--4">
                <div className="desc-area">
                    <h1>Design Automation Conference 2024</h1>
                    <div className="new-event">
                        <div className="conf-bg"></div>
                        <button className="btnmore"  onClick={handleRedirect}>Learn More</button>
                    </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}