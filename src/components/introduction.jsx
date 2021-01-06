import React, { Component } from 'react'
import "../App.css"

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li id="bgimg1">
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "darkorange"}}>Hi! <br />I'm DHARUN NARAYANAN L K</h1>
                          <p><a id="butt" href="https://1drv.ms/w/s!AuE0xx_ikcckj3VqzIT8CBTtppQL?e=wuTzau" target="_blank" rel="noopener noreferrer">View CV <i className="icon-download4" style={{color: "firebrick"}}/></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li id="bgimg1">
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "darkorange"}}>I love building<br /> THINGS !!</h1>
                          <p><a id="butt" href="https://github.com/Dharun-Narayanan" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" style={{color: "firebrick"}}/></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li id="bgimg1">
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "darkorange"}}>I often <br/>Write ... </h1>
                          <p><a id="butt" href="https://dharun-narayanan.medium.com/" target="_blank" rel="noopener noreferrer" >View Blog <i className="icon-book" style={{color: "firebrick"}} /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
