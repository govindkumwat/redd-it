import React, { useEffect, useState } from 'react'

export const SearchedPost = (props) => {
    const {searchfetched} = props

    return (
        <div>
            { searchfetched.length > 0 ?
                searchfetched.map((post, index) => (
                    <>
                  <img src={post.data.url} alt="" />
                   </>
                )):
                <>
               <p>Search Subreddits</p>
                </>
                
            }
            
            
        </div>
    )
}
