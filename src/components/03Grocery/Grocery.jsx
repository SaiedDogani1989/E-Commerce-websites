import React from 'react';
import GroceryCard from './GroceryCard';
import cards from "./gCard"
import "./grocery.css"


const Grocery = () => {


    // const [cards, setCards] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setCards(data);
    //             setLoading(false)
    //         }
    //         );
    // }, []);

    return (

        <>
            <section className="container-fluid">
                <div className="row card-middel mt-4">
                    {cards.map((e) => {
                        return (
                            <GroceryCard
                                id={e.id}
                                key={e.userId}
                                price={e.price}
                                img={e.img}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Grocery;