import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState} from "react";
import { SimpleInfiniteList } from "./components/Api";
import {Vids} from './components/Vids'
import {PhotoDetails} from './components/PhotoDetails'
import { Gfycat } from "./components/Gfycat";
import { Offcanvas} from 'react-bootstrap';
import { AsyncSearchBar } from "./components/AsyncSearchBar";
import { SearchReddit } from "./components/SearchReddit";


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <header class="header" id="header">
        <nav class="nav container">
            <Link to="/" class="nav__logo">Infinity</Link>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <Link to='/photos' class="nav__link ">
                            <i class='bx bx-image nav__icon'></i>
                            <span class="nav__name">Pictures</span>
                        </Link>
                    </li>
                    <li class="nav__item">
                        <Link to='/videos'  class="nav__link">
                            <i class='bx bx-video nav__icon'></i>
                            <span class="nav__name">Videos</span>
                        </Link>
                    </li>
                    <li class="nav__item">
                        <a onClick={handleShow} class="nav__link">
                            <i class='bx bx-search nav__icon'></i>
                            <span class="nav__name">Search</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a onClick={localStorage.setItem('choice', 'Yes')}  class="nav__link">
                        <i class='bx bx-globe' style={{color: 'white', background: 'black'}}></i>
                            <span class="nav__name">Portfolio</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        </nav>
    </header>
    <Offcanvas show={show} onHide={handleClose} className='searchbackground'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <AsyncSearchBar handleClose= {handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
        <Routes>
          <Route path="photos" element={<SimpleInfiniteList />}></Route>
          <Route path="videos" element={<Vids />} />
          <Route path="/:id" element={<PhotoDetails/>}></Route>
          <Route path ='/gfycat' element={<Gfycat/>}/>
          <Route path = 'r/:subreddit' element={<SearchReddit />}/>
          
        </Routes>

    </>
  );
}

export default App;
