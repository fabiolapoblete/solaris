export type SolarDataItem = {
  id: string;
  type: string;
  name: string;
  latinName: string;
  rotation: number;
  circumference: number;
  temp: {
    day: number;
    night: number;
  };
  distance: number;
  orbitalPeriod: number;
  desc: string;
  moons: string[];
  isVisible?: boolean;
};

export const useData = () => {
  return {
    async fetchSolarData(): Promise<SolarDataItem[]> {
      try {
        const URL = 'https://fabiolapoblete.github.io/solaris/data.json';
        const response = await fetch(URL);
        const data = await response.json();
        return data as SolarDataItem[];
      } catch (error) {
        console.error('Error fetching data', error);
        return [];
      }
    },
  };
};
