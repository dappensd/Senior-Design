import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '.././particlesConfig'; // Adjust the path as needed

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      ...particlesConfig, // Use your existing configuration
      fullScreen: {
        enable: true,
        zIndex: -1 // Set the z-index to -1
      }
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBackground;


