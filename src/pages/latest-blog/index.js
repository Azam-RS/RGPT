import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import "./blognew.css";

export default function BlogPrimis() {
  const [blogData, setBlogData] = useState([]);

  const getAuthorClass = (author) => {
    const authorName = author.split(' ')[0].toLowerCase(); // Extract the first name
    return `author-${authorName}`; 
  };

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/blog/feed.json');
        const data = await response.json();
        if (data) {
          const blogPosts = data.items;
          console.log(blogPosts);
          const latestBlogData = blogPosts.map(item => {
            const formattedTitle = item.title.replace(/ /g, "_");
            return{
              id: item.id,
              url: item.url,
              dateModified: item.date_modified,
              imageUrl: item.image || `/img/blog/${formattedTitle}.png`,
              author: item.author.name,
              summary: item.summary,
              title: item.title,
              extraContent: item.content_html,
          };
        });
          setBlogData(latestBlogData);  
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const topLatestPost =  blogData[0];
  const latestPosts = blogData.slice(0, 10); //Number of post

  return (
    <Layout>
      <div className="newblog-holder">
        <div className="container">
          <div className="row">
            {topLatestPost ? (
              <>
                <div className="col col--6">
                  <div className="newb minh">
                  <a href={topLatestPost.url}>
                    <h1>{topLatestPost.title}</h1>
                  </a>
                  <h2>{topLatestPost.author || "Anonymous"}</h2>
                  <p>{topLatestPost.summary  || "No description provided."}</p>
                    {topLatestPost.author === "Asav Gandhi" && topLatestPost.extraContent && 
                        topLatestPost.extraContent.split('\n').length > 4 && (
                          <p>
                            {stripHtmlTags(topLatestPost.extraContent.split('\n')[4])} {/* Retrieves the 5th paragraph (index 4) */}
                          </p>
                      )}
                    <button className="btn-more" onClick={() => handleRedirect(topLatestPost.url)}>Read More</button>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="imgbox minh">
                  <div className={`author-img ${getAuthorClass(topLatestPost.author)}`}></div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="blg-post">
        <div className="container">
          <div className="row">
            <div className="col col--12 text--start">
              <div className="desc-blog">
                <h1>Our Blog Posts</h1>
              </div>
            </div>
            {latestPosts.map((blog, index) => (
              <div key={index} className="col col--4">
                <div className="desc-blg">
                  <div className="img-thumb">
                    <img src={blog.imageUrl} alt="img"/>
                  </div>
                  <div className="desc-holder">
                    <div className="desc-box">
                      <a href={blog.url}>
                        <h1>{blog.title}</h1>
                      </a>
                      <p>{blog.summary || "No description available."}</p>
                    </div>
                    <button className="btn-more" onClick={() => handleRedirect(blog.url)}>Read More</button>
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