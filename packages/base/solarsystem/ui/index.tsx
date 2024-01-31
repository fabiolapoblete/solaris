export const SolarSystem = () => {
  const url =
    'https://github.com/fabiolapoblete/solaris/blob/main/packages/base/solarsystem/data/data.json';

  async function fetchSolarData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('error fetching json data', error);
    }
  }
  fetchSolarData();
  return <section>yo</section>;
};
