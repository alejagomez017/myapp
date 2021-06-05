
import React from 'react'

import github from "../photos/github.png" ;

function Footer(){
    return(

        <div className="footer">
            <a href="https://github.com/alejagomez017/"> 
             <img src= {github} alt='github icon' />
            </a>
          
        </div>


    

    )
}

export default Footer;