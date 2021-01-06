import React, { Component } from 'react'
import "../App.css"

export default class Skills extends Component{
    render(){
        return(
            <div>
                <section class="colorlib-skills" data-section="skills">
                    <div class="colorlib-narrow-content">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <span class="heading-meta">My Specialty</span>
                                <h2 class="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div class="progress-wrap">
                                    <h3>C Programming</h3>
                                        <div class="progress">
                                            <div class="progress-bar color-1" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" id="pb">
                                                <span>80%</span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                <div class="progress-wrap">
                                    <h3>C++</h3>
                                    <div class="progress">
                                        <div class="progress-bar color-2" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" id="pb1">
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div class="progress-wrap">
                                    <h3>JAVA</h3>
                                    <div class="progress">
                                        <div class="progress-bar color-3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="pb2">
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                <div class="progress-wrap">
                                    <h3>PYTHON</h3>
                                    <div class="progress">
                                        <div class="progress-bar color-4" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" id="pb3">
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div class="progress-wrap">
                                    <h3>SQL</h3>
                                    <div class="progress">
                                        <div class="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" id="pb4">
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                <div class="progress-wrap">
                                    <h3>Flutter and Dart</h3>
                                    <div class="progress">
                                        <div class="progress-bar color-6" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="pb5">
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}