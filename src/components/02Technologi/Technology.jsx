import React from 'react';
import techCard from './tCard';

import TechCard from './TechCaed';
import "./technology.css"


const Technology = () => {
  return (
    <section className="container-fluid">
      <div className="row card-middel mt-4">

        {techCard.map((e) => {
          return (
            <TechCard
              key={e.key}
              price={e.price}
              img={e.img}
            />
          )
        })}
       
      </div>
    </section>
  );
}

export default Technology;