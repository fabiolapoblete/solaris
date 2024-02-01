import './style.scss';

import { SolarDataItem } from '@solaris/solarsystem';
import { motion } from 'framer-motion';

export const SolarBody = ({
  solarObj,
  onBodyClick,
}: {
  solarObj: SolarDataItem;
  onBodyClick: () => void;
}) => {
  const calculatePlanetSize = (circumference: number, type: string) => {
    const baseSize = 188; // Jupiter is the reference size
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
    <motion.article
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3, ease: 'linear' }}
      whileHover={{
        scale: 1.1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 10,
        },
      }}
      onClick={onBodyClick}
    >
      <p className='solar-body__name'>{solarObj.name} </p>
    </motion.article>
  );
};
