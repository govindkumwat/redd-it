import React, {useEffect, useState} from 'react'
import AsyncSelect from 'react-select/async';
import { SearchedPost } from './SearchedPost';
import {Link, Navigate, useNavigate  } from 'react-router-dom';
import { components } from 'react-select';
import { SimpleInfiniteList } from './Api';



export const AsyncSearchBar = (props) => {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [searchfetched, setSearchfetched] = useState('');
  const navigate = useNavigate();


  const handleInputChange = value => {
    setValue(value);
  };

  const handleChange = value => {
    console.log(value.value);
    navigate(`/r/${value.value}`);    
    window.location.reload();
    
  
  }

const loadOptions =  (inputValue) => {
  return  fetch(`https://www.reddit.com/subreddits/search.json?q=${inputValue}`)
    .then(response => response.json())
    .then(json => { 
      return json.data.children.map(child => ({
        value: child.data.display_name,
        label: child.data
        
      }));

    });
    
  };
 

  //Fetching selected subreddit
  //  useEffect(() => {
  //    if(selectedValue.value){
  //      fetch(`https://www.reddit.com/r/${selectedValue.value}/new.json?limit=1000`)
  //       .then(response => response.json())
  //       .then(json => {
  //         setSearchfetched(json.data.children);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       }
  //       ) 
  // }
  // }, [selectedValue.value])

  


    return (
      <>

    <AsyncSelect
     cacheOptions
     defaultOptions
     value={selectedValue.value }
     getOptionLabel={e => e.label.display_name}
     getOptionValue={e => e.label.display_name}
     loadOptions={loadOptions}
     onInputChange={handleInputChange}
     onChange={handleChange }/>
  
      <SearchedPost searchfetched = {searchfetched}/>
      <SimpleInfiniteList selectedValue = {!selectedValue ? 'wallpaper' : selectedValue.value} />
      </>
    )
}
