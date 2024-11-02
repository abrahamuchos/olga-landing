import Card from "./Card.jsx";

import paint1Img from "../assets/img/paint-1.png";
import logoEvent1Img from "../assets/img/logo-sone-que-volaba.svg";

export default function Events() {

  return (
    <section className='max-container bg-creamOlga'>
      {/*Title*/}
      <div className="flex flex-col items-center w-full py-10">
        <h1 className='text-2xl text-blackOlga mb-6'>Los escuchamos y yendo no, llegando</h1>
        <h2 className='text-xl text-blackOlga'>Te spoileamos a dónde primero...</h2>
      </div>
      {/*End Title*/}

      {/*Events*/}
      <div className="py-12">
        <Card
          image={{src: paint1Img, alt: "Evento soñé que volaba cover"}}
          logoSrc={logoEvent1Img}
          places={["Córdoba", "Santa Fé", "Mendoza"]}
        />




      </div>
      {/*End Events*/}

    </section>
  );
}



