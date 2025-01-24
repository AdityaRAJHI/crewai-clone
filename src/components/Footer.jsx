import React from 'react';
    import './Footer.css';

    function Footer() {
      return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">CrewAI</div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Site</h4>
                <ul>
                  <li>Home</li>
                  <li>Enterprise</li>
                  <li>Open Source</li>
                  <li>Ecosystem</li>
                  <li>Use Cases</li>
                  <li>Templates</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li>The Framework</li>
                  <li>Documentation</li>
                  <li>Join our Forum</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Help</h4>
                <ul>
                  <li>Chat With Our Docs</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Status</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;
