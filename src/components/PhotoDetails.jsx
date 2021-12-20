import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import '../App.css'
import { useNavigate } from 'react-router';



export const PhotoDetails = () => {

  const navigate = useNavigate();

    const {id}  = useParams()
    const [detail, setDetail] = useState('')


    useEffect( () => {
      fetch(`https://www.reddit.com/${id}.json`)
      .then(response => response.json())
      .then(data =>  setDetail(data[0].data.children)
        
      )
    }, [id])


    console.log(detail)

    if(!detail) {
      return null
    }

    console.log(detail)

    const redditurl = 'https://www.reddit.com'+detail[0].data.permalink
    
    console.log(redditurl)


    

    return (


    
        
        <div className="fullscreen-view__entry-container">
          <div className='fullscreen-view__entry'>


          <div className='close' onClick={() => {navigate('/photos')}}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 5.25L5.25 18.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.75 18.75L5.25 5.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
          {
            detail.map((imgdetail) => (

              <>
              <div className='post'>
              <a href={redditurl} className="icon-button item-panel__icon item-panel__button">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M4.222 19.778c.975.975 2.255 1.462 3.535 1.462 1.281-.001 2.562-.487 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829c-1.169 1.167-3.072 1.169-4.243 0-1.169-1.17-1.169-3.073 0-4.243l2.829-2.828L7.051 9.879l-2.829 2.828C2.273 14.656 2.273 17.829 4.222 19.778zM19.778 11.293c1.948-1.949 1.948-5.122 0-7.071-1.95-1.95-5.123-1.948-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829c1.17-1.167 3.073-1.169 4.243 0 1.169 1.17 1.169 3.073 0 4.243l-2.829 2.828 1.414 1.414L19.778 11.293z"></path><path transform="rotate(-134.999 12 12)" d="M11 5.999H13V18H11z"></path></svg>
            Source
            </a>
            
              <img className='fullscreen-view__media' src={imgdetail.data.url} alt="" />
              
            
              </div>

              <div className='post-title'>
              <p className='title'>{imgdetail.data.title}</p>
              </div>

              
            
           

              </>
              
            ))
          }
    

           
            </div>
            
        </div>
    )
}
