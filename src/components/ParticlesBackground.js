// ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '.././particlesConfig'; // Import your particles configuration

const ParticlesBackground = () => {
  // Removed the zIndex from particlesStyle since we're setting it in the <style> tag below
  const particlesStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1
  };

  return (
    <>
      <style>
        {`
          #tsparticles > canvas {
            z-index: -1 !important;
          }
        `}
      </style>
      <Particles id="tsparticles" style={particlesStyle} params={particlesConfig} />
    </>
  );
};

export default ParticlesBackground;

