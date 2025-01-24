import React from 'react';
    import './IntegrationDetails.css';

    function IntegrationDetails() {
      return (
        <section className="integration-details">
          <div className="integration-image">
            <img
              src="https://placekitten.com/300/200"
              alt="Integration UI"
            />
          </div>
          <div className="integration-text">
            <h2>Easily Integrates with All Apps</h2>
            <p>
              Manage AI agents with ease, keeping humans in the loop for feedback
              and control.
            </p>
          </div>
        </section>
      );
    }

    export default IntegrationDetails;
