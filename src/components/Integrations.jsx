import React from 'react';
    import './Integrations.css';
    import logos from '../logos.json';

    function Integrations() {
      return (
        <section className="integrations">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-container">
              <div dangerouslySetInnerHTML={{ __html: logo.svg }} />
            </div>
          ))}
        </section>
      );
    }

    export default Integrations;
