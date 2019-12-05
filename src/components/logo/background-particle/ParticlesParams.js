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
            opacity: 2
        },
        move: {
            speed: 2
        },
        opacity: {
            anim: {
                enable: true,
                opacity_min: 0.5,
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
            radius: 5
        },  
        url: imagesvg,
        inline: {
            arrangement: "equidistant"
        },
    },
    retina_detect: true,
}

export default ParticleParams