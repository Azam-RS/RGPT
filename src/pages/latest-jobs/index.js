import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import "./latestjobs.css";
export default function JobPostPrimis() {
  const [jobPostData, setJobPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://primis.ai/careers/rss.xml');
        const xmlData = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        const items = xmlDoc.querySelectorAll("item");
        let i = 0;
        const jobsData = Array.from(items).map(item => {
          // Extracting data from the tags
          const contentEncodedElement = item.getElementsByTagNameNS("*", "encoded")[0];
          const contentEncoded = contentEncodedElement?.textContent || "";
        
          const parser = new DOMParser();
          const contentDoc = parser.parseFromString(contentEncoded, 'text/html');
          i++;
          return {
            id: i,
            title : item.querySelector("title")?.textContent || "",
            url : item.querySelector("link")?.textContent || "",
            location : contentDoc.querySelector(".location")?.textContent?.trim() || "",
            jobType : contentDoc.querySelector(".job-type")?.textContent?.trim() || "",
          };
        });

        setJobPostData(jobsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <Layout title="Careers">
      <div className="job-holder">
      <div className="abt-b-txt"><h1>Careers</h1>
      <p>Where Innovation Meets <br/> Your Career path</p>
        </div>
      </div>
      <div className="new-jbox">
        <div className="container">
          <div className="row">
            <div className="col col--12 text--start">
              <div className="jb-title">
                <h1>Open Positions:</h1>
              </div>
            </div>

            {jobPostData.map((jobPost) => (
              <div key={jobPost.id} className="col col--4">
                <div className="desc-area">
                    <div className="desc-jb">
                        <h1>{jobPost.title}</h1>
                        <p><span className="txt-bld">Location:</span> {jobPost.location}</p>
                        <p><span className="txt-bld">Job Type:</span> {jobPost.jobType}</p>
                        <button className="btnmore" onClick={() => handleRedirect(jobPost.url)}>Learn More</button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}