import React from 'react';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

    return (

        <>
            <footer className="container-fluid mt-5">
                <div className="row">
                    <div className="footer-content col-md-4 col-sm-12">
                        <ul>
                            <h4>Company</h4>
                            <li>How it Works</li>
                            <li>Delivery Areas</li>
                            <li>Office Program</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className="footer-content col-md-4 col-sm-12">
                        <ul>
                            <h4>Support</h4>
                            <li>Your Account</li>
                            <li>Subscribe and Save</li>
                            <li>Sell Your Goods</li>
                        </ul>
                    </div>
                    <div className="footer-content col-md-4 col-sm-12">
                        <ul>
                            <h4>Our Value</h4>
                            <li>About</li>
                            <li>Takeback Program</li>
                            <li>Brands We Trust</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="container-fluid copyright bg-warning">
                <p>copyright {year} sdogani</p>
            </div>  

        </>
      );
}
 
export default Footer;