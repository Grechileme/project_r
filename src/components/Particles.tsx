import { Particles as TsParticles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { FC } from "react";

const particlesInit = async (main: Engine) => {
  await loadFull(main);
};

type ParticlesProps = {
  darkmode: boolean;
}

const Particles: React.FC<ParticlesProps> = ({darkmode}) => {
  // console.log('darkmode particle', darkmode);
  return (
    <TsParticles
      id="tsparticles"
      init={particlesInit}
      className="z-0"
      // loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            // value: "#ffffff",
            value: darkmode ? "#06b6d4" : "#00C5C5",
          },
          links: {
            // color: "#ffffff",
            color: darkmode ? "#06b6d4" : "#00C5C5",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default Particles;