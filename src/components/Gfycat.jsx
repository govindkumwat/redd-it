import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

export const Gfycat = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get('https://api.gfycat.com/v1/gfycats/search?search_text=keywords&count=10000').then((response) => {
      setPost(response.data.gfycats);
    });
  }, []);

  if (!post) return null;

  return (
    <>

    {
      post.map(giffy => 
        <>
        <img src={giffy.max5mbGif} alt="" />
        </>
        )
    }
     
    </>
  );
};
