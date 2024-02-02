import './style.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useData, SolarDataItem } from '@solaris/solarsystem';
import { SolarBody } from '@solaris/solar-body';
import { Modal } from '@solaris/modal';

export const SolarSystem = ({ input }: { input: string }) => {
  const { fetchSolarData } = useData();
  const [solarData, setSolarData] = useState<SolarDataItem[]>([]);
  const [selectedBodyIndex, setSelectedBodyIndex] = useState<number>(-1);

  useEffect(() => {
    async function getSolarData(): Promise<void> {
      const data: SolarDataItem[] = await fetchSolarData();

      const filteredData = data?.map((solarObject) => ({
        ...solarObject,
        isVisible: solarObject.name.toLowerCase().includes(input.toLowerCase()),
      }));

      setSolarData(filteredData);
    }
    getSolarData();
  }, [input]);

  const openModal = (solarObj: SolarDataItem) => {
    const selectedIndex = solarData.findIndex(
      (item) => item.id === solarObj.id
    );
    setSelectedBodyIndex(selectedIndex);
  };

  const closeModal = (): void => {
    setSelectedBodyIndex(-1);
  };

  const handleNext = (): void => {
    setSelectedBodyIndex((prevIndex) =>
      prevIndex === solarData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = (): void => {
    setSelectedBodyIndex((prevIndex: number) =>
      prevIndex === 0 ? solarData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      className='solar-system'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3, ease: 'linear' }}
    >
      {selectedBodyIndex !== -1 ? (
        <Modal
          solarObj={solarData[selectedBodyIndex]}
          onClose={closeModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ) : (
        solarData &&
        solarData.map((solarObj) => (
          <div
            key={solarObj.id}
            className={solarObj.isVisible ? ' ' : 'hidden'}
          >
            <SolarBody
              solarObj={solarObj}
              onBodyClick={() => openModal(solarObj)}
            />
          </div>
        ))
      )}
    </motion.section>
  );
};
