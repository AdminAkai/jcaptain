import React, { Component } from 'react'
import './Logo.scss'
import Particles from 'react-particles-js'
import ParticleParams from './background-particle/ParticlesParams'
import Background from './background-particle/background/Background'
import GmailLogo from './background-particle/images/gmail.png'
import LinkedInLogo from './background-particle/images/linkedin.png'
import DockerLogo from './background-particle/images/docker.svg'
import GithubLogo from './background-particle/images/github.png'
import Button from './subcomponents/button/Button'

export default class Logo extends Component {

    state = {
        activated: false,
        particles: ParticleParams,
        emailActivated: false,
        currentWidth: 0,
    }

    getScreenWidth = () => {
        const currentWidth = window.innerWidth
        this.setState(currentWidth)
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

    showEmail = (event) => {
        event.preventDefault()
        this.setState({emailActivated: !this.state.emailActivated})
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
                            <img src={GmailLogo} className="image-icon" alt="gmail icon" onClick={this.showEmail}></img>
                            <a href="https://www.linkedin.com/in/josh-adrian-trinidad/" rel="noopener noreferrer" target="_blank"><img src={LinkedInLogo} className="image-icon" alt="linkedin icon"></img></a>
                            <a href="https://hub.docker.com/u/jcaptainnn" rel="noopener noreferrer" target="_blank"><img src={DockerLogo} className="image-icon" alt="linkedin icon"></img></a>
                            <a href="https://github.com/JCaptainnnn" rel="noopener noreferrer" target="_blank"><img src={GithubLogo} className="image-icon" alt="linkedin icon"></img></a>
                        </div>
                    </div>
                </div>
            :
                <Particles params={this.state.particles} className='particles' />
            }
            {this.state.activated
            ?
            <Button />
            :
            null
            }
            <div className="logo">
                <div className="glitch" data-text="" onClick={this.activate} onMouseEnter={this.setGlitch} onMouseLeave={this.removeGlitch}>JC&lambda;pt&lambda;in</div> 
            </div>
            {this.state.emailActivated
            ?
            <div className="email">
                <p className="animatedFadeInUp2 animated2 fadeInUp2">jtrinidadwork@gmail.com</p>
            </div>
            :
            null
            }
        </div>
        )
    }
} 