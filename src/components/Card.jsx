/**
 *
 * @param {{src: string|object, alt: string}} image
 * @param {string|object} logoSrc
 * @param {string[]} places
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({image, logoSrc, places}) {

  return (
    <div className='bg-white p-8 pb-10 w-[470px]'>
      <div className="flex flex-col items-center">
        <img src={image.src} alt={image.alt} className='w-full mb-6'/>
        <img src={logoSrc} alt="logo evento" className='w-200px mb-3'/>
        <p className='text-blackOlga text-lg uppercase'>
          {places.map((place, i) => (
            <span key={i}>
              {place}
              {i < places.length - 1 ? <span className='p-2'>·</span> : null}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}



