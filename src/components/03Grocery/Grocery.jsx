import React from 'react';
import GroceryCard from './GroceryCard';
import "./grocery.css"


const Grocery = () => {



    return (

        <>
            <section className="container-fluid">
                <div className="row card-middel mt-4 p-4">
                    <GroceryCard />
                </div>
            </section>
        </>
    );
}

export default Grocery;