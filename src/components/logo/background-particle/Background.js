import React, { Component } from 'react'
import Particles from 'react-particles-js'
import ParticleParams from './ParticlesParams'

export default class Background extends Component {

render() {
        return(
            <div className="logo-container">
                <Particles params={ParticleParams} className='particles' />
            </div>
        )
    }
} 