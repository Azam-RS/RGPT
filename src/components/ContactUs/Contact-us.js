// src/components/HubSpotForm.js
import React, { useEffect } from 'react';
import './contact-us.css';

const ContactUsForm = () => {
  useEffect(() => {
    // Create a script element for the HubSpot form library
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    // css
    const addCustomStyles = () => {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = `
        .hs-input {
          background-color: #f5f8fa; /* Your custom styles here */
        }
      `;
      document.head.appendChild(style);
    };

    // Once the script is loaded, create the form
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "43857519",
          formId: "b5573346-c0e1-4436-b31c-c1030b84e011",
          target: '#contactUsForm'
        });
      }
    };
    addCustomStyles(); // Inject custom styles after the form is initialized
    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className='container'>
    <div className='row'>
    <div className='col col--6'>
            <div className="ctxt">
              <div className="price-title">
                <h1>Contact Us</h1>
                <p>Begin your HDL Co-Design With The Premier Design Tool Today!</p>
                </div>
              </div>
        </div>
        <div className='col col--6'>
          <div className='formbox'>
            <div id="contactUsForm" className='cformHolder'></div>
            <a href='https://getrapidgpt.primis.ai' target='_blank'>Sign up Now</a>
        </div>
        </div>
    </div>
  </div>;
};

export default ContactUsForm;
