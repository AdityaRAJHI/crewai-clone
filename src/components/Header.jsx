import React from 'react';
    import './Header.css';

    function Header() {
      return (
        <header className="header">
          <div className="logo">CrewAI</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Enterprise</li>
              <li>Open Source</li>
              <li>Ecosystem</li>
              <li>Use Cases</li>
              <li>Templates</li>
              <li>Blog</li>
            </ul>
          </nav>
          <button>Start Enterprise Trial</button>
        </header>
      );
    }

    export default Header;
