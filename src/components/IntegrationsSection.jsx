import React from 'react';
    import './IntegrationsSection.css';

    function IntegrationsSection() {
      return (
        <section className="integrations-section">
          <div className="integrations-box">
            <div className="integration-item">
              <div className="integration-content">
                <h3>Business</h3>
                <div className="integration-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                  </svg>
                  <span>Hubspot</span>
                </div>
              </div>
            </div>
            <div className="integration-item">
              <div className="integration-content">
                <h3>Scalability</h3>
                <div className="integration-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                  </svg>
                  <span>ERP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="integrations-text">
            <h2>Easily Integrates with All Apps</h2>
            <p>
              Empower teams to build automations without coding, streamlining
              processes across departments.
            </p>
          </div>
        </section>
      );
    }

    export default IntegrationsSection;
