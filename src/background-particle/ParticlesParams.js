import imagesvg from './Half-Life_2_Logo.svg'

const ParticleParams = {
    fps_limit: 28,
    particles: {
        number: {
            value: 200,
            density: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 50,
            opacity: 1  
        },
        move: {
            speed: 1
        },
        opacity: {
            anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 2,
                sync: true
            },
            value: 1
        }
    },
    polygon: {
        enable: true,
        scale: 2,
        type: "inline",
        move: {
            radius: 2
        },
        url: imagesvg,
        inline: {
            arrangement: "equidistant"
        },
        // draw: {
        //     enable: true,
        //     stroke: {
        //         color: "rgba(255, 255, 255, .2)"
        //     }
        // }
    },
    retina_detect: true,
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            }
        },
        modes: {
            bubble: {
                size: 20,
                distance: 50
            }
        }
    }
}

// const ParticleParams = {
//     polygon: {
//       enable: true,
//       type: "inside",
//       move: {
//         radius: 10
//       },
//       url: imagesvg
//     }
//   }

export default ParticleParams