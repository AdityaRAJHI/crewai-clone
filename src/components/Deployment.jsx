import React from 'react';
    import './Deployment.css';

    function Deployment() {
      return (
        <section className="deployment">
          <div className="deployment-box">
            <div className="option-box">
              <div className="icon">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v11h-2v-5a2 2 0 0 1 2-2h2" />
                  <path d="M6 22h12" />
                  <path d="M6 2h3a5 5 0 0 1 5 5v11h2v-5a2 2 0 0 0-2-2h-2" />
                </svg>
              </div>
              <div className="option-content">
                <h3>Cloud</h3>
                <p>
                  Deploy CrewAI on your preferred cloud service for scalable and
                  flexible operations.
                </p>
              </div>
            </div>
            <div className="option-box">
              <div className="icon">
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
                  <path d="M3 10h18v10H3z" />
                  <path d="M3 6h18" />
                  <path d="M12 2v4" />
                </svg>
              </div>
              <div className="option-content">
                <h3>Self-Hosted</h3>
                <p>
                  Host CrewAI within your own infrastructure for full control and
                  security.
                </p>
              </div>
            </div>
          </div>
          <div className="deployment-text">
            <h2>Works In The Cloud, Self-Hosted or Locally</h2>
            <p>
              Deploy crewai on your own infrastructure with self-hosted options or
              leverage your preferred cloud service, giving you complete control
              over your environment.
            </p>
          </div>
        </section>
      );
    }

    export default Deployment;
