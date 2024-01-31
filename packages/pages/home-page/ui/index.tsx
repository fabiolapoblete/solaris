import './style.scss';

import { motion } from 'framer-motion';
import { SolarSystem } from '@solaris/solarsystem';

export const HomePage = () => {
  return (
    <div className='home-page'>
      <motion.header
        className='home-page__header'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, ease: 'linear' }}
      >
        <h1 className='large-header'>Solar system</h1>
        <h2 className='sub-header'>Solaris</h2>
      </motion.header>
      <main>
        <section className='home-page__solarsystem'>
          <SolarSystem />
        </section>
      </main>
    </div>
  );
};
