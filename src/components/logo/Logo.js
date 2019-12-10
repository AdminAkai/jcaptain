import React, { Component } from 'react'
import './Logo.scss'
import Particles from 'react-particles-js'
import ParticleParams from './background-particle/ParticlesParams'
import Background from './background-particle/Background'
import GmailLogo from './background-particle/images/gmail.png'
import LinkedInLogo from './background-particle/images/linkedin.png'

export default class Logo extends Component {

    state = {
        activated: false,
        particles: ParticleParams
    }

    activate = (event) => {
        event.preventDefault()
        this.removeGlitch()
        let previousParticles = { ...this.state.particles }
        previousParticles.particles.move.speed = 5
        previousParticles.polygon.move.radius = 700
        this.setState({activated: true}, () => {
            this.setState({particles: previousParticles}, () => {
                this.forceUpdate()
                let activationLogo = document.getElementsByClassName("glitch")[0]
                let background = document.getElementsByClassName("particles")[0]
                background.style.animation = "background-color 4s ease";
                activationLogo.style.animation = "color 4s ease";
                setTimeout(this.changeBackgroundColor(background, activationLogo), 4000)
                let Logo = document.getElementsByClassName("logo")[0]
                Logo.style.marginRight = "140px"
            })
        })
    }

    setGlitch = () => {
        let activationLogo = document.getElementsByClassName("glitch")[0]
        activationLogo.setAttribute("data-text", "JCλptλin")
    }

    removeGlitch = () => {
        let activationLogo = document.getElementsByClassName("glitch")[0]
        activationLogo.setAttribute("data-text", "")
    }

    changeBackgroundColor = (background, activationLogo) => {
        let parentNode = document.getElementsByClassName("logo")[0]
        background.style.backgroundColor = "white"
        activationLogo.style.color = "black"
        let newElement = document.createElement("div")
        newElement.innerHTML = "JC&lambda;pt&lambda;in"
        newElement.setAttribute("class", "glitch-after")
        newElement.style.animation = "color 8s ease";
        parentNode.appendChild(newElement)
        activationLogo.remove()
    }

    render() {
        return(
        <div className="logo-container">
            {this.state.activated 
            ?
                <div className="image-controller">
                    <Background activated={this.state.activated}/>
                    <div className="image-controller">
                        <div className="image-parent animatedFadeInUp animated fadeInUp">
                            <img src={GmailLogo} className="image-icon" alt="gmail icon"></img>
                            <a href="https://www.linkedin.com/in/josh-adrian-trinidad/" target="_blank"><img src={LinkedInLogo} className="image-icon" alt="linkedin icon"></img></a>
                        </div>
                    </div>
                </div>
            :
                <Particles params={this.state.particles} className='particles' />
            }
            <div className="logo">
                <div className="glitch" data-text="" onClick={this.activate} onMouseEnter={this.setGlitch} onMouseLeave={this.removeGlitch}>JC&lambda;pt&lambda;in</div> 
            </div>
        </div>
        )
    }
} 