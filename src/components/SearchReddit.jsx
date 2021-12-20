import { useState, useEffect, useReducer } from "react"
import '../App.css';
import { Link, useParams } from "react-router-dom";
import { Chips, Chip } from '@mantine/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PhotoDetails } from "./PhotoDetails";
import Masonry from 'react-masonry-css'


const PAGE_NUMBER =1;

export const SearchReddit = (props) => {
  const [img, setImg] = useState('')
  const [page, setPage] = useState(PAGE_NUMBER)
  const iddata = img.slice(-1)
  const [filter, setFilter] = useState('')

  let {subreddit} = useParams();
  console.log(subreddit)


 const baseUrl = 'https://www.reddit.com/r'



  const filtered = (e) => {
    setFilter(e)
    
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 2,
    400: 2
  };

  


  useEffect ( async() => {
    subreddit &&
    await fetch(`${baseUrl}/${subreddit}/${filter}.json?after=${ iddata.length > 0 ? iddata.map(id => `t3_${id.data.id}`): ''}&page=${page}&limit=30`)
    .then(response =>  response.json())
    .then(data => setImg(currentImage =>  ([...currentImage,...data.data.children]))
    )

  },[page])



  useEffect( async() => {
  await fetch(`${baseUrl}/${subreddit}/${filter}.json?after=${ iddata.length > 0 ? iddata.map(id => `t3_${id.data.id}`): ''}&page=${page}&limit=30`)
  .then(response => response.json())
  .then(data => setImg([ ...data.data.children ] 
    )
  )
}, [filter])




const scrollToEnd = () => {
  setPage(page + 1) 
}
window.onscroll = function () {
  const bottom =  Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
  
  if (bottom,
     Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    ) {
      scrollToEnd() 
      console.log('loading....')
  }
}



  return (
    <>




    <div className='App'>

        <div className='subreddittitle'>
            <p>{subreddit.toUpperCase()}</p>
        </div>

    

     

    <div className="filters">
<Chips>
  <Chip value="new" onClick={(e) => filtered(e.target.value)}>New</Chip>
  <Chip value="best" onClick = {(e) => filtered(e.target.value)}>Top</Chip>
  <Chip value="rising" onClick = { (e) => filtered(e.target.value)}>Rising</Chip>
  <Chip value="hot" onClick = {(e) => filtered(e.target.value)}>Random</Chip>
  
  
</Chips>
</div>

<Masonry
 
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">

    {img.length > 1 &&
    
      img.filter(imgs => imgs.data.post_hint==='image').map(imgs => (
       <>


        <div id='center'>
         
        <Link to={`/${imgs.data.id}`} >
        <LazyLoadImage src={imgs.data.url_overridden_by_dest} effect="blur" delayMethod='debounce' threshold='100'  >

           
          </LazyLoadImage  >
          </Link>
          
         </div>
          </>    
      )
      )
    }   
      </Masonry>
 </div> 


    </>
  )
}