import React from 'react';
import ClothCard from './ClothCard';
import clothCards from './cardInfo';
import "./clothes.css";


const Clothes = () => {
    return (
        <section class="container-fluid">
            <div class="row card-middel mt-4">
                {clothCards.map((e) => {
                    return (
                        <ClothCard
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

export default Clothes;


