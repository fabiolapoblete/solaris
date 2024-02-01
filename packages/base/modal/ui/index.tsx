import './style.scss';

import React from 'react';
import { motion } from 'framer-motion';
import { SolarDataItem } from '@solaris/solarsystem';

export const Modal = ({
  solarObj,
  onClose,
}: {
  solarObj: SolarDataItem;
  onClose: () => void;
}) => {
  return (
    <main className='modal' onClick={onClose}>
      {/* <header>
        <button className='modal-close-button' onClick={onClose}>
          Close
        </button>
      </header> */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: 'easeIn' }}
      >
        <article className='about-body'>
          <section>
            <h1 className='large-header'>{solarObj.name}</h1>
            <h2 className='sub-header'>{solarObj.latinName}</h2>
            <p className='text about-body__desc'>{solarObj.desc}</p>
          </section>
          <section className='about-body__facts'>
            <section className='about-body__facts--section'>
              <h3 className='small-header'>
                Circumference{' '}
                <span className='text'>{solarObj.circumference} km</span>
              </h3>
              <h3 className='small-header'>
                Max temperature{' '}
                <span className='text'>{solarObj.temp.day} C</span>
              </h3>
            </section>
            <section className='about-body__facts--section'>
              <h3 className='small-header'>
                KM from sun <span className='text'>{solarObj.distance} km</span>
              </h3>
              <h3 className='small-header'>
                Min temperature{' '}
                <span className='text'>{solarObj.temp.night} C</span>
              </h3>
            </section>
          </section>
          <section className='about-body__moons'>
            <h3 className='small-header'>Moons</h3>
            <section className='about-body__moons--moons'>
              {solarObj?.moons.map((moon, index, array) => (
                <React.Fragment key={index}>
                  <p className='text'>{moon}</p>
                  {index !== array.length - 1 && (
                    <span className='pipe'> | </span>
                  )}
                </React.Fragment>
              ))}
            </section>
          </section>
        </article>
      </motion.section>
    </main>
  );
};

{
  /* <div className='modal-content' onClick={(e) => e.stopPropagation()}>
</div> */
}
