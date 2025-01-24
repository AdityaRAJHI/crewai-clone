import React from 'react';
    import './UseCaseCards.css';

    function UseCaseCards() {
      const cards = [
        {
          title: 'AI-Driven Cloud Solutions',
          description:
            'Integrate AI with cloud solutions to optimize data storage, processing, and security.',
          tags: ['AI Integration', 'Cloud Solutions'],
          icon: (
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
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          ),
        },
        {
          title: 'Predictive Marketing Campaigns',
          description:
            'Leverage Machine Learning for data-driven, predictive marketing that enhances brand positioning.',
          tags: ['Marketing', 'Machine Learning'],
          icon: (
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
          ),
        },
        {
          title: 'Healthcare Data Enrichment',
          description:
            'Enrich patient data with AI to improve diagnostics and personalized care plans.',
          tags: ['Healthcare', 'Data Enrichment'],
          icon: (
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
          ),
        },
      ];

      return (
        <section className="use-case-cards">
          <div className="cards-container">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="card-tags">
                  {card.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="card-button">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section>
      );
    }

    export default UseCaseCards;
