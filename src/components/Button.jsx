import cursor from '../assets/img/cursor.png';

/**
 *
 * @param {string} [label=Click me] - Label of the button
 * @param {string} [className] - Class name of the button
 * @param {boolean} [icon=false] - Handle icon of the button
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button({label = 'Click me', className = '', withIcon = false}) {


  return (
    <button
      className={`h-[50px] bg-redOlga text-white text-xl font-GameOverCre flex justify-center items-center leading-none relative ${className}`}>
      {label}
      <img src={cursor} className={`absolute right-[10px] top-[20px] ${withIcon ? 'block' : 'hidden'}`} alt="cursor"/>
    </button>
  );
}



