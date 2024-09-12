import React, { useState } from "react";
import Layout from "@theme/Layout";
import WebinarVideo from "./WebinarVideo";
import "./webinar.css";

export default function Webinar() {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleModalOpen = (url) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setVideoUrl("");
  };

  const videos = [
    {
      title: "RapidGPT: Meet Your New AI-Powered Design Assistant",
      url: "https://www.youtube.com/embed/pT47W6EpVAU?si=mW0LS2if-RG5Tp6K",
    },
  ];

  return (
    <Layout title="Webinar">
      <div className="webinar-holder">
        <div className="abt-b-txt">
          <h1>On-Demand Webinars</h1>
          <p>Unlock the Future with PrimisAI: 
          <br/> On-Demand Webinars at Your Fingertips</p>
        </div>
      </div>
      <div className="webinar-box">
        <div className="container">
          <div className="row">
            <div className="col col--12 text--start">
              <div className="jb-title">
                <h1>Our Latest Webinars</h1>
              </div>
            </div>
            {videos.map((video, index) => (
              <div className="col col--4" key={index}>
                <div className="desc-area">
                  <h1>{video.title}</h1>
                  <div className="new-webinar">
                    <div className="wbn-bg"></div>
                    <button className="btnmore" onClick={() => handleModalOpen(video.url)}>
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WebinarVideo show={showModal} onClose={handleModalClose} videoUrl={videoUrl} />
    </Layout>
  );
}
