import axios from 'axios'
import React, { useEffect } from 'react'

export const Searchposts = ({selectedValue}) => {
    console.log(selectedValue)

  useEffect(() => {
      axios.get(`https://reddit.com/r/react/hot.json`)
        .then(res => {
            console.log(res.data.data.children)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>

            

            
        </div>
    )
}
