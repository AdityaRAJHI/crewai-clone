import React from 'react';
    import './EvaluateUseCase.css';

    function EvaluateUseCase() {
      return (
        <section className="evaluate-use-case">
          <h2>Evaluate Your Use Case</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-bar-fill"></div>
            </div>
          </div>
          <div className="question">
            <h3>1. What type of use case are you envisioning?</h3>
            <div className="options">
              <label className="option">
                <input type="radio" name="use-case" />
                <span>Qualitative Content (Ex: Marketing, Entertainment, etc.)</span>
              </label>
              <label className="option">
                <input type="radio" name="use-case" />
                <span>
                  Qualitative + Quantitative Mix (Ex: Sales, New Features, Hiring,
                  etc.)
                </span>
              </label>
              <label className="option">
                <input type="radio" name="use-case" />
                <span>High Precision (Ex: Business Processes, etc)</span>
              </label>
              <label className="option">
                <input type="radio" name="use-case" />
                <span>
                  Very High Precision (Ex: Accounting, Financial Models. etc.)
                </span>
              </label>
            </div>
          </div>
          <button className="next-button">Next</button>
        </section>
      );
    }

    export default EvaluateUseCase;
