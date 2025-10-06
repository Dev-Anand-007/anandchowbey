import React, { useState, useEffect } from "react";
import { SkillsInfo } from "../../constants";
import { FaMedium } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";


export const Blogs = () => {
    const [blogs, setBlogs] = useState([]); // ✅ Initialize as empty array
    const [loading, setLoading] = useState(true); // ✅ Initialize as true
    const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // ✅ start loading
  
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@manage378"
        );
        const data = await res.json();
  
        if (data.items && Array.isArray(data.items)) {
          const items = data.items.map((item) => {
            // ✅ Thumbnail fallback
            let thumbnail = item.thumbnail;
            if (!thumbnail && item.content) {
              const match = item.content.match(/<img[^>]+src="([^">]+)"/);
              if (match && match[1]) {
                thumbnail = match[1];
              }
            }
  
            // ✅ Excerpt from content (strip HTML)
            let excerpt = "";
            if (item.content) {
              const div = document.createElement("div");
              div.innerHTML = item.content;
              excerpt = div.innerText.slice(0, 150) + "..."; // limit to 150 chars
            }
  
            return {
              author: item.author,
              categories: item.categories || [],
              link: item.link,
              pubDate: item.pubDate,
              title: item.title,
              thumbnail,
              excerpt,
            };
          });
  
          setBlogs(items);
          console.log("Filtered Items:", items);
        }
      } catch (err) {
        console.error("Error fetching API:", err);
        setError(err.message);
      } finally {
        setLoading(false); // ✅ always stop loading
      }
    };
  
    fetchData();
  }, []);
  
  
    useEffect(() => {
      console.log("Blogs state updated:", blogs);
    }, [blogs]);
  return (
    <section
      id="contact"
      className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >


            {/* Section Title */}
      <motion.div
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,ease:easeInOut}}
      viewport={{once:false,amount:0.5}}
      
      className="text-center mb-8">
        <motion.h2
         initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,ease:easeInOut}}
      viewport={{once:false,amount:0.5}}
         className="text-3xl sm:text-4xl font-bold text-white">Blogs</motion.h2>
        <motion.div
        initial={{width:0}}
        whileInView={{width:'5rem'}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:0.5,ease:easeInOut}}
        className="w-24 h-1 bg-gradient-to-r from-blue-400  via-purple-500 to-pink-500 mx-auto mt-2"></motion.div>
        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:0.5,delay:0.4,ease:easeInOut}}
        className="text-gray-400 mt-4 text-lg font-semibold">
          Dive into my Medium blogs — practical tips, project insights, and tech
          knowledge to help you level up your skills.
        </motion.p>
      </motion.div>

      {/* <div className="flex justify-end  w-[70vw] m-auto">
        <button className="px-4 py-2 bg-gray-900 rounded-lg text-white font-medium shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8245ec] focus:ring offset-2 transition-all duration-200  ">
            Sort 
            
        </button>
      </div> */}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8245ec] mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading blogs...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="text-center py-10">
          <p className="text-red-400 mb-4">Error loading blogs: {error}</p>
        </div>
      )}

      {/* Blogs Cards */}
      {!loading && blogs.length > 0 && (
        <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
          {blogs.map((item, index) => (
            
            <div
              key={index}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
              hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-0.4"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8245ec]  font-semibold"
              >
              {/* Blog Header */}
              <div className="flex items-center mb-4">
                <div>

                <FaMedium size={35}  color="white" className="border" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mx-4 text-start">
                  {item.title}
                </h3>
              </div>

              {/* Tilt Thumbnail */}
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </Tilt>

              {/* Blog Info */}
              <p className="text-gray-400 text-sm mb-2">
                ✍️ {item.author} • 🗓 {new Date(item.pubDate).toDateString()}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.categories && item.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="bg-[#8245ec33] text-[#8245ec] text-xs px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Link */}
              
                Read More →
             </a>
            </div>
          ))}
        </div>
      )}

      {/* No Blogs State */}
      {!loading && blogs.length === 0 && !error && (
        <div className="text-center py-10">
          <p className="text-gray-400">No blogs found.</p>
        </div>
      )}
    </section>
  );
};
