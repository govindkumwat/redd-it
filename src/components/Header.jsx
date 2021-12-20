import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Infinity Scroll
          </a>
        </div>
      </nav>

      <Link to='/photos'>Pictures</Link>
      <Link to='/videos'>Videos</Link>
      <Link to='/gfycat'>gfycat</Link>
    </div>
  );
};
