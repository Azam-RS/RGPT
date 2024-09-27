import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import "./blognew.css";

export default function BlogPrimis() {
  const [blogData, setBlogData] = useState([]);

  const authorImages = {
    Valerio: "/img/blog/valerio.png",
    Hans: "/img/blog/hans.png",
    Naveed: "/img/blog/naveed.png",
    Pierre: "/img/blog/pierre.png",
    Asav: "/img/blog/asav.png",
  };
  
  const getAuthorImage = (author) => {
    for (const key in authorImages) {
      if (author.includes(key)) {
        return authorImages[key];
      }
    }
    return "/img/blog/blog_default.png"; // Default image if no match is found
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
                  {/* <h1 onClick={() => handleRedirect(topLatestPost.url)}> {topLatestPost.title}</h1> */}
                  <a href={topLatestPost.url}>
                    <h1>{topLatestPost.title}</h1>
                  </a>

                  {/* <h1  role="button" tabIndex={0} onClick={() => handleRedirect(topLatestPost.url)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleRedirect(topLatestPost.url);
                    }}
                  >
                    {topLatestPost.title}
                  </h1> */}
                  <h2>{topLatestPost.author || "Anonymous"}</h2>
                  <p>{topLatestPost.summary || "No description provided."}</p>
                    <button className="btn-more" onClick={() => handleRedirect(topLatestPost.url)}>Read More</button>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="imgbox minh">
                  <img
                    src={getAuthorImage(topLatestPost.author)}
                    alt="img"
                    className="img-responsive"
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
                    {/* <h1 onClick={() => handleRedirect(blog.url)}>{blog.title}</h1> */}

                    {/* <h1 role="button" tabIndex={0} onClick={() => handleRedirect(blog.url)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleRedirect(blog.url);
                    }}
                  >
                    {blog.title}
                  </h1> */}
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