import React from 'react';
    import './Stats.css';

    function Stats() {
      return (
        <section className="stats">
          <h2>The Fastest Growing Multi-Agent Platform</h2>
          <div className="stats-container">
            <div className="stat-box">
              <p>Over</p>
              <h3>18.6k</h3>
              <p>Stars on GitHub</p>
            </div>
            <div className="stat-box featured">
              <h3>40% of Fortune 500</h3>
              <p>companies are using CrewAI</p>
            </div>
            <div className="stat-box">
              <p>Used In</p>
              <h3>60+</h3>
              <p>Countries</p>
            </div>
          </div>
          <div className="unlock-power">
            <h2>
              <span>Unlock the Power</span> of Multi-Agent AI
            </h2>
            <p>
              Transform complex tasks into seamless automations with CrewAI
            </p>
            <div className="buttons">
              <button>Start Free Trial</button>
              <button>I Want A Demo</button>
            </div>
          </div>
        </section>
      );
    }

    export default Stats;
