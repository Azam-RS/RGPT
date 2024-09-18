import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import "./blognew.css";

export default function BlogPrimis() {
  const [blogData, setBlogData] = useState([]);

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
  const latestPosts = blogData.slice(0, 6);

  return (
    <Layout>
      <div className="newblog-holder">
        <div className="container">
          <div className="row">
            {topLatestPost ? (
              <>
                <div className="col col--6">
                  <div className="newb minh">
                  <h1>{topLatestPost.title}</h1>
                  <h2>{topLatestPost.author || "Anonymous"}</h2>
                  <p>{topLatestPost.summary || "No description provided."}</p>
                    <button className="btn-more" onClick={() => handleRedirect(topLatestPost.url)}>Read More</button>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="imgbox minh">
                  <img
                    src={
                      topLatestPost.author.includes("Valerio")
                        ? "/img/blog/valerio.png"
                        : topLatestPost.author.includes("Hans")
                        ? "/img/blog/hans.png"
                        : topLatestPost.author.includes("Naveed")
                        ? "/img/blog/naveed.png"
                        : topLatestPost.author.includes("Pierre")
                        ? "/img/blog/pierre.png"
                        : "/img/blog/blog_default.png"
                    }
                    alt="img" className="img-reasponsive"
                  />
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
                    <h1>{blog.title}</h1>
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