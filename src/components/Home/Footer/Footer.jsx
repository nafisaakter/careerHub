import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-[#1A1919] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className=''>
            <h3 className= "text-white font-bold text-[32px] mb-2">CareerHub</h3>
            <ul className='footer-l'>
              <li className=''>There are many variations of passages <br/> of Lorem Ipsum , 
                but the majority have <br/> suffered alteration in some form.</li>
              
            </ul>
            <ul className='grid grid-cols-2 gap-4 footer-l'>
                <li>da</li>
                <li>da</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-h font-bold mb-2">Company</h3>
            <ul className='footer-l'>
              <li>About Us</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-h font-bold mb-2">Product</h3>
            <ul className='footer-l'>
              <li>Prototype</li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-h font-bold mb-2">Support</h3>
            <ul className='footer-l'>
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-h font-bold mb-2">Contact</h3>
            <ul className='footer-l'>
              <li>524 Oulu,Finland</li>
              <li>+358 41 000</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;