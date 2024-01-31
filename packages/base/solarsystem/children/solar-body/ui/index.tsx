import './style.scss';

import { SolarDataItem } from '@solaris/solarsystem';

export const SolarBody = ({ solarObj }: { solarObj: SolarDataItem }) => {
  const calculatePlanetSize = (circumference: number, type: string) => {
    const baseSize = 300; // Jupiter is the reference size
    const baseCircumference = 439264; //Jupiters circumference
    const ratioToJupiter = circumference / baseCircumference;

    if (type === 'star') {
      return 1000;
    } else {
      const planetSize = ratioToJupiter * baseSize;
      return planetSize;
    }
  };

  return (
    <article
      className={`solar-body ${solarObj.name}`}
      style={{
        width: `${calculatePlanetSize(
          solarObj.circumference,
          solarObj.type
        )}px`,
        height: `${calculatePlanetSize(
          solarObj.circumference,
          solarObj.type
        )}px`,
      }}
    >
      <p>{solarObj.name}</p>
    </article>
  );
};
