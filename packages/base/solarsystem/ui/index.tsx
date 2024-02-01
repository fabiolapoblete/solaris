import './style.scss';

import { useEffect, useState } from 'react';
import { useData, SolarDataItem } from '@solaris/solarsystem';
import { SolarBody } from '@solaris/solar-body';
import { Modal } from '@solaris/modal';

export const SolarSystem = () => {
  const { fetchSolarData } = useData();
  const [solarData, setSolarData] = useState<SolarDataItem[]>([]);
  const [selectedBody, setSelectedBody] = useState<SolarDataItem | null>(null);

  useEffect(() => {
    async function getSolarData(): Promise<void> {
      const data: SolarDataItem[] = await fetchSolarData();
      setSolarData(data);
    }
    getSolarData();
  }, []);

  const openModal = (solarObj: SolarDataItem) => {
    setSelectedBody(solarObj);
    console.log(solarObj);
  };

  const closeModal = () => {
    setSelectedBody(null);
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

      {/* Modal */}
      {selectedBody && <Modal solarObj={selectedBody} onClose={closeModal} />}
    </section>
  );
};
