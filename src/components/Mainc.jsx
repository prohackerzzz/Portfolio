import React from 'react'
import { useState} from 'react'
import reh from './newsScreen.png'
import sec from './second.png'
import third from './first.png'
import fourth from './fourth.png'
import fifth from './fifth.png'

function Mainc() {
  
    return (
      
        <div  class="cont">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.wallpaperscraft.com/image/single/code_text_colorful_140555_2048x1152.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp2234543.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://quotefancy.com/media/wallpaper/1600x900/1700728-Linus-Torvalds-Quote-Talk-is-cheap-Show-me-the-code.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
<div id="proj"  className="main2">
  <h3>My Projects</h3>
  <div className="row1">
    <div className="col1">
      <div className="cards-sample">
        <img src={reh} height='200vh' width="230vh"/>
        <a href="https://github.com/prohackerzzz/Hirecontractor" class="btn links btn-primary">Get this</a>
      </div>
      <div className="cards-sample">
        <img src={sec} height='200vh' width="230vh"/>
        <a href="https://github.com/prohackerzzz/ReactNews" class="btn links btn-primary">Get this</a>
      </div>
      <div className="cards-sample">
        <img src={third} height='200vh' width="230vh"/>
        <a href="https://github.com/prohackerzzz/AngularProj" class="btn links btn-primary">Get this</a>
      </div>
      
      
    </div>
    <div className="down">
    <div className="cards-sample">
        <img src={fourth} height='200vh' width="230vh"/>
        <a href="https://github.com/prohackerzzz/Aafiacollection/tree/master" class="btn links btn-primary">Get this</a>
      </div>
      <div className="cards-sample">
        <img src={fifth} height='200vh' width="230vh"/>
        <a href="https://github.com/prohackerzzz/First" class="btn links btn-primary">Get this</a>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Mainc
