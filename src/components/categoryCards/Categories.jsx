import React from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {
    return ( 

        <>
           <div className="container">
      <div className="row cord-body">
        <div className="card">
          <div className="imgBx">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
          <div className="contentBx">
            <h2 className="mb-5">Technology</h2>
            <Link to="technology">More</Link>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="contentBx">
            <h2 className="mb-5">Grocery</h2>
            <a href="grocery">More</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img
              src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
          <div className="contentBx">
            <h2 className="mb-5">Clothes</h2>
            <a href="clothes">More</a>
          </div>
        </div>
      </div>
    </div>  
        </>

     );
}
 
export default Categories
