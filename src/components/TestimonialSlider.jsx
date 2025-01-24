import React from 'react';
    import './TestimonialSlider.css';

    function TestimonialSlider() {
      return (
        <section className="testimonial-slider">
          <div className="slider-container">
            <button className="slider-arrow left-arrow">
              &lt;
            </button>
            <div className="testimonial">
              <p>
                “It’s the best agent framework out there and improvements are
                being shipped like nothing I’ve ever seen before!”
              </p>
              <div className="testimonial-author">
                <img
                  src="https://placekitten.com/50/50"
                  alt="Ben Tossell"
                />
                <div>
                  <p>Ben Tossell</p>
                  <p>Founder at Ben's Bites</p>
                </div>
                <div className="testimonial-logo">
                  <span>BEN'S BITES</span>
                </div>
              </div>
            </div>
            <button className="slider-arrow right-arrow">
              &gt;
            </button>
          </div>
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>
      );
    }

    export default TestimonialSlider;
