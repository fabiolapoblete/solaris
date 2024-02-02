import './style.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SolarSystem } from '@solaris/solarsystem';

export const HomePage = () => {
  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value.toLowerCase());
  };

  return (
    <div className='home-page'>
      <section className='home-page__searchbar'>
        <label className='small-header'>Search body</label>
        <input name='search' type='text' onChange={inputHandler} />
      </section>
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
        <SolarSystem input={inputText} />
      </main>
    </div>
  );
};
