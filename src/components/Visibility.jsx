import React from 'react';
    import './Visibility.css';

    function Visibility() {
      const data = [
        { label: 'DataSynth', value: 98 },
        { label: 'ContentGen', value: 68 },
        { label: 'AutoResponse', value: 63 },
        { label: 'PredictiveAnalyst', value: 58 },
        { label: 'ProcessOptimizer', value: 54 },
        { label: 'EfficiencyGuard', value: 50 },
        { label: 'RevenueTracker', value: 44 },
      ];

      return (
        <section className="visibility">
          <div className="visibility-content">
            <h2>Provides Complete Visibility</h2>
            <p>
              Track the quality, efficiency, and ROI of your AI agents. Get
              detailed insights into their impact, allowing you to continuously
              optimize and justify your automation investments.
            </p>
            <div className="progress-bars">
              {data.map((item) => (
                <div key={item.label} className="progress-bar-container">
                  <div className="progress-bar-label">{item.label}</div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${item.value}%` }}
                    >
                      <span className="progress-bar-value">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default Visibility;
