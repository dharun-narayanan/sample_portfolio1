import React, { Component } from 'react'
import "../App.css"

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" id="bgimg" />
              <h1 id="colorlib-logo"><a href="index.html">Dharun Narayanan</a></h1>
              <span className="email"><i className="icon-mail" style={{color: "black"}}></i> lkdharun@gmail.com</span>
            </div><br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/dharun.narayanan" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" style={{color: "blue"}}/></a></li>
                <li><a href="https://twitter.com/dharun_official" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" style={{color: "rgb(38, 132, 255)"}}/></a></li>
                <li><a href="https://www.instagram.com/_dharun_26/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" style={{color: "hotpink"}}/></a></li>
                <li><a href="https://www.linkedin.com/in/dharun-narayanan-l-k-407459197/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" style={{color: "blue"}}/></a></li>
                <li><a href="https://github.com/Dharun-Narayanan" target="_blank" rel="noopener noreferrer"><i className="icon-github" style={{color: "black"}}></i></a></li>
                <li><a href="https://dharun-narayanan.medium.com/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2" style={{color: "midnightblue"}}></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" style={{color: "red"}}/><br></br>
                  &copy;2021 All rights reserved 
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
