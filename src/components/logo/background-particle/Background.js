import React, { Component } from 'react'
import Particles from 'react-particles-js'
import ParticleParams from './ParticlesParams'
import "./background.css"

export default class Background extends Component {

render() {
        return(
            <div className="logo-container">
                {this.props.activated 
                ?
                    <div>
                        <ul className="box-area">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>                
                :
                    null
                }
                <Particles params={ParticleParams} className='particles'  style={{overflow: "hidden"}}/>
            </div>
        )
    }
} 