import React from 'react';



const TechCard = (props) => {
    return (  
        <div className="card col-lg-3" style={{"width": "18rem"}}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{props.price}</p>
          <a href="#" className="btn btn-outline-dark">Add to card</a>
        </div>
      </div>
    );
}
 
export default TechCard;
