import React, { Component } from 'react'
import './button.scss'
import '../../Logo.scss'


export default class Button extends Component {


    render() {
        return(
            <div className="frame animatedFadeInUp animated fadeInUp">
                <div className="button">
                <span>&lambda;BOUT</span>
                    <svg>
                    <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                    <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                </svg>
                </div>
                <div className="projects">
                    <a>
                        <div className="button-2">
                        <span>C&lambda;T CH&lambda;OS</span>
                            <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                        </div>
                    </a>
                    <div className="button-3">
                    <span>SCHEDUL&lambda;R</span>
                        <svg>
                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                    </svg>
                    </div>
                    <div className="button-4">
                    <span>IM&lambda;GE RECOG</span>
                        <svg>
                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                    </svg>
                    </div>
                </div>
            </div>
        )
    }

}   

