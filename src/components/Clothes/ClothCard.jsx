import React from 'react';



const ClothCard = (props) => {
    return (
        <div class="card col-lg-3" style={{"width": "18rem"}}>
            <img
                src={props.img}
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <p class="card-text">{props.price}</p>
                <a href="#" class="btn btn-outline-dark">Add to card</a>
            </div>
        </div>
    );
}

export default ClothCard;