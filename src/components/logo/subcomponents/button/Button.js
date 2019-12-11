import React, { Component } from 'react'
import './button.scss'
import '../../Logo.scss'
import Resume from './resume.pdf'


export default class Button extends Component {

    state = {
        aboutActivate: false,
    }


    activateAbout = (event) => {
        event.preventDefault()
        this.setState({aboutActivate: true})
    }

    deactivateAbout = (event) => {
        event.preventDefault()
        this.setState({aboutActivate: false})
    }

    render() {
        return(
            <div className="frame animatedFadeInUp animated fadeInUp">
                <a href={Resume} rel="noopener noreferrer" target="_blank">
                    <div className="button">

                    <span>&lambda;BOUT</span>
                        <svg>
                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                    </svg>
                    </div>
                </a>
                <div className="projects">
                    <a href="https://jcaptainnnn.github.io/" rel="noopener noreferrer" target="_blank">
                        <div className="button-2">
                        <span>C&lambda;T CH&lambda;OS</span>
                            <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                        </div>
                    </a>
                    <a href="https://schedular-test-one.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                        <div className="button-3">
                        <span>SCHEDUL&lambda;R</span>
                            <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                        </div>
                    </a>
                    <a href="https://stack-with-clarifai.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                        <div className="button-4">
                        <span>IM&lambda;GE RECOG</span>
                            <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                        </div>
                    </a>
                </div>
            {this.state.aboutActivate
            ?
            <div className="about-container" onClick={this.deactivateAbout}>
                <div className="about">
                </div>
            </div>
            :
            null
            }
            </div>
        )
    }

}   

