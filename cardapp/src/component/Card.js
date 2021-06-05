
import React from 'react'

import github from "../photos/github.png" ;


import image from "../photos/22.jpg"; 

import photo from "../photos/RkiMyoycj.png";

function Card(){
    return(
        <div className="background">

          <div className="photos">
          <img src= {image} alt="photo" width="200px" height="200px"/>
            <div className="heart">
         <img src={photo} alt="heart" width="50px" height="50px"/>
          </div> 
          </div> 

            <h1>Hi! <br/> I'm a front-end developer</h1>

            

            <div className="button1">
            <button>Name</button></div>
        
        <div className="button2">
        <button>Skills</button>
        </div>




          <div className="footer">
            <a href="https://github.com/alejagomez017/"> 
             <img src= {github} alt='github icon' width="40px"/>
            </a>
        </div>

        
          
        </div>

       

    

    )
}

export default Card;