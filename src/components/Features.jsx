import React from 'react';
    import './Features.css';

    function Features() {
      return (
        <section className="features">
          <div className="features-content">
            <h2>The Complete Platform for Multi-Agent Automation</h2>
            <div className="steps">
              <div className="step">
                <h3>1. Build Quickly</h3>
                <p>
                  Start by using CrewAI's framework or UI Studio to build your
                  multi-agent automations—whether coding from scratch or leveraging
                  our no-code tools and templates.
                </p>
              </div>
              <div className="step">
                <h3>2. Deploy Confidently</h3>
              </div>
              <div className="step">
                <h3>3. Track All Your Crews</h3>
              </div>
              <div className="step">
                <h3>4. Iterate To Perfection</h3>
              </div>
            </div>
            <button className="get-started-button">Get Started</button>
          </div>
          <div className="features-image">
            <img
              src="https://placekitten.com/400/300"
              alt="CrewAI UI"
            />
          </div>
        </section>
      );
    }

    export default Features;
