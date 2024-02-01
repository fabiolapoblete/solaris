// Modal component
import { SolarDataItem } from '@solaris/solarsystem';

export const Modal = ({
  solarObj,
  onClose,
}: {
  solarObj: SolarDataItem;
  onClose: () => void;
}) => {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className='modal-close-button' onClick={onClose}>
          Close
        </button>

        {/* Your modal content here */}
        <h2>{solarObj.name}</h2>
        <p>Circumference: {solarObj.circumference}</p>
        {/* Add more information as needed */}
      </div>
    </div>
  );
};
