import { motion } from "framer-motion"

import bus1Img from '../assets/img/bus-1.png';
import bus2Img from '../assets/img/bus-2.png';
import carImg from '../assets/img/car.png';

export default function Bus() {

  const quadraticEase = (t) => {
    return t * t * t;
  };


  return (
    <section
      className='w-full h-[150px] bg-checkered bg-cover bg-center flex flex-nowrap justify-end content-start items-end overflow-x-hidden
      lg:h-[300px]'
    >
      <motion.img
        src={bus1Img}
        alt="bus-1"
        className='h-[100px] lg:h-[200px]'
        initial={{x: "400%", opacity: 1}}
        animate={{x: "-1000%"}}
        transition={{duration: 16, ease: "linear", repeat: Infinity}}
      />
      <motion.img
        src={bus2Img}
        alt="bus-2"
        className='h-[100px] lg:h-[200px]'
        initial={{x: "400%", opacity: 1}}
        animate={{x: "-1100%", opacity: 1}}
        transition={{duration: 16, delay: 2, ease: "linear", repeat: Infinity}}
      />
      <motion.img
        src={carImg}
        alt="car"
        className='h-[100px] lg:h-[200px]'
        initial={{x: "300%", opacity: 1}}
        animate={{x: "-1200%", opacity: 1}}
        transition={{duration: 24, delay: 2, ease: quadraticEase, repeat: Infinity}}
      />
    </section>
  );
}



