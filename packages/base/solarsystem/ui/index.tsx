import './style.scss';

import { useEffect, useState } from 'react';
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

      const filteredData = data.filter((object) => {
        const includesInput = object.name
          .toLowerCase()
          .includes(input.toLowerCase());
        return includesInput;
      });

      if (input === '') {
        setSolarData(data);
      } else {
        setSolarData(filteredData);
      }
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
    <section className='solar-system'>
      {solarData &&
        solarData.map((solarObj) => (
          <SolarBody
            key={solarObj.id}
            solarObj={solarObj}
            onBodyClick={() => openModal(solarObj)}
          />
        ))}
      {selectedBodyIndex !== -1 && (
        <Modal
          solarObj={solarData[selectedBodyIndex]}
          onClose={closeModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
};
