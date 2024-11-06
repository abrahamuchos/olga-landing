import blueRibbon from '../assets/img/ribbon-blue.svg';
import purpleRibbon from '../assets/img/ribbon-purple.svg';

/**
 *
 * @param {{src: string|object, alt: string}} image
 * @param {string|object} logoSrc
 * @param {string[]} places
 * @param {'blue'|'purple'} ribbonOption
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({image, logoSrc, places, ribbonOption = 'blue'}) {
  // w-[140px] absolute m-0 left-[73%] bottom-[77%]
  return (
    <div className='bg-white w-[300px] relative
      sm:w-[400px]
      md:w-[470px] '
    >
      <img src={ribbonOption === 'blue' ? blueRibbon : ribbonOption === 'purple' ? purpleRibbon : null}
           alt="ribbon"
           className='absolute m-0 w-[93px] left-[72%] bottom-[81%]
           sm:w-[112px] sm:left-[75%]

           md:w-[140px] md:left-[73%] md:bottom-[77%]'
      />

      {/*Content*/}
      <div className="flex flex-col items-center p-4 pb-6 lg:p-8 lg:pb-10">
        <img src={image.src} alt={image.alt} className='w-full mb-6'/>
        <img src={logoSrc} alt="logo evento" className='w-200px mb-3'/>
        <p className='text-blackOlga text-lg uppercase max-md:text-center'>
          {places.map((place, i) => (
            <span key={i}>
              {place}
              {i < places.length - 1 ? <span className='p-2'>·</span> : null}
            </span>
          ))}
        </p>
      </div>
      {/*End Content*/}
    </div>
  );
}



