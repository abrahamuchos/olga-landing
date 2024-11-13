import Button from "./Button.jsx";

import logoGame from '../assets/img/logo-game.png';
import games from '../assets/img/games.png';
import controlGames from '../assets/img/control-games.png';


export default function Games() {


  return (
    <section className='bg-creamOlga '>
      <div className="max-container py-10 px-5 flex flex-col gap-10 lg:flex-row">
        {/*Games*/}
        <div className="bg-white flex w-full flex-col p-5 md:flex-row lg:w-3/4">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <img src={logoGame} alt="logo-juego" className='w-[135px] mb-8'/>
            <h2 className='text-xl font-YoungSerif'>Mientras tanto, esperá viciando con nuestros jueguitos</h2>
            <p className='text-baseDeco font-GameOverCre'>creados por argetingames</p>
            <Button label='JUGAR' withIcon={true} className='w-[100%] lg:w-[85%]'/>
          </div>

          <div className="relative flex-1 ml-0 mr-5 md:ml-5 xl:ml-6 2xl:ml-10">
            <img src={games} alt="juegos" className='w-full xl:max-w-[390px]'/>
            <img
              src={controlGames}
              alt="control juegos"
              className='max-w-[145px] absolute left-[65%] bottom-[2%]
              sm:max-w-[180px]
              md:max-w-[155px] md:bottom-[10%]
              lg:left-[55%]'
            />
          </div>
        </div>
        {/*End Games*/}

        {/*Tags*/}
        <div className="bg-white h-[200px] flex-1">
          <h1>2</h1>
        </div>
        {/*End Tags*/}
      </div>

    </section>
  );
}



