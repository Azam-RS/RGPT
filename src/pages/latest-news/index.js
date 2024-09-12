import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import "./latestnews.css";
export default function NewsRoomPrimis() {
  const [newsRoomData, setNewsRoomData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/newsroom/rss.xml');
        const xmlData = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        const items = xmlDoc.querySelectorAll("item");
        const newsData = Array.from(items).map(item => ({
          title: item.querySelector("title").textContent,
          url: item.querySelector("link").textContent,
          date: formatDateString(item.querySelector("pubDate").textContent),
          description: item.querySelector("description").textContent
        }));
        
        setNewsRoomData(newsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const formatDateString = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };


  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <Layout title="News" description="PrimisAI">
      <div className="news-holder">
      <div className="abt-b-txt"><h1>Newsroom</h1>
      <p>Explore the Future Now, uncover the Latest from PrimisAI</p>
        </div>
      </div>
      <div className="new-post">
        <div className="container">
          <div className="row">
            <div className="col col--12 text--start">
              <div className="news-title">
                <h1>Our Latest News</h1>
              </div>
            </div>
            {newsRoomData.map((newsRoom, index) => (
              <div key={index} className="col col--4">
                <div className="desc-area">
                  <div className="n-holder">
                    <div className="desc-box">
                    <h1>{newsRoom.title}</h1>
                    <h2 className="newsdate">{newsRoom.date}</h2>
                    
                      <p>{newsRoom.description || "No description available."}.. </p>
                      <a href="#" className="btnmore" onClick={() => handleRedirect(newsRoom.url)}>Read More</a> 
                      
                    </div>
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
