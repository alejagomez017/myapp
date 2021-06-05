
import React from 'react'

import image from "../photos/22.jpg"; 

function Photo(){
    return(
        <div className="image">
            <img src= {image} alt="photo"/>
          
        </div>

    )
}

export default Photo;