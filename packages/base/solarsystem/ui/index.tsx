import './style.scss';

import { useEffect, useState } from 'react';
import { useData, SolarDataItem } from '@solaris/solarsystem';
import { SolarBody } from '@solaris/solar-body';

export const SolarSystem = () => {
  const { fetchSolarData } = useData();
  const [solarData, setSolarData] = useState<SolarDataItem[]>([]);

  useEffect(() => {
    async function getSolarData(): Promise<void> {
      const data: SolarDataItem[] = await fetchSolarData();
      setSolarData(data);
    }
    getSolarData();
  }, []);

  return (
    <section className='solar-system'>
      {solarData &&
        solarData.map((solarObj) => (
          <SolarBody key={solarObj.id} solarObj={solarObj} />
        ))}
    </section>
  );
};
