import React, { useState, useEffect } from 'react';



function NewApp() {
    const [cards, setCards] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);
    console.log(cards);

    return (
        <div className="App">
            <header className="App-header">
                {/* <p>{!data ? "Loading..." : data.id}</p>
                <p>{!data ? "Loading..." : data.price}</p> */}
                {cards && cards.map((e) => {
                    return (
                        <div key={e.userId}>
                            <h1>{e.price}</h1>
                            <h1>{e.id}</h1>
                            <img src={e.img}></img>
                        </div>
                    )
                })}

            </header>
        </div>
    );
}

export default NewApp