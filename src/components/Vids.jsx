import { useState, useEffect } from "react"
import '../App.css';
import loaderimg from './loader/1479.gif'
import {Blockquote, Card,  Group, useMantineTheme, SegmentedControl } from '@mantine/core';
import { activeElement } from "dom-helpers";




const PAGE_NUMBER =1;
export const Vids = () => {

  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];


  const [img, setImg] = useState('')
  const [page, setPage] = useState(PAGE_NUMBER)

  const iddata = img.slice(-1)
  const [value, setValue] = useState([]);



  
  useEffect( () => {
  fetch(`https://www.reddit.com/new.json?after=${ iddata.length > 0 ? iddata.map(id => `t3_${id.data.id}`): ''}&page=${page}&limit=100&t=year`)
  .then(response => response.json())
  .then(data => setImg([...img, ...data.data.children], 
    )
  )
}, [value,page])

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



    {/* <SegmentedControl
    className="segment"
      value={value}
      onChange={setValue}
      data={[
        { label: 'New', value: 'new', activeElement },
        { label: 'Rising', value: 'rising' },
        { label: 'Popular', value: 'popular' },
        { label: 'Hot', value: 'Hot' },
      ]}
    /> */}


    {img.length > 1 &&
    
      img.filter(imgs => imgs.data.is_video).map(imgs => (
       <>
{console.log(imgs.data)}


<div style={{ width: 340, margin: 'auto', marginTop: '10px' }}>
      <Card shadow="sm" padding="lg">
        
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Blockquote >{imgs.data.title}</Blockquote> 
          
        </Group>

        
      </Card>
    </div>
        <div className='image'>
          {/* <img src={imgs.data.url_overridden_by_dest.isvideo} alt="" />  */}
          <p>Example</p>
         </div>

         <div className='links'>
     
      <a href={imgs.data.url}>
         
         </a>
  
         
         </div>

         

         </>    
      )
      )
    }    



   
    
</div>
    </>
  )
}