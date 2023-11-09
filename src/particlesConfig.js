//particlesConfig.js
const particlesConfig = {
    
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          }
          
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          },
          "modes": {
            "repulse": {
              "distance": 100,
              "duration": 0.4
            }
          }
        },
        "retina_detect": true
      }


 export default particlesConfig;