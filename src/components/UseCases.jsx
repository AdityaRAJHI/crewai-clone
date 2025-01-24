import React from 'react';
    import './UseCases.css';

    function UseCases() {
      const categories = [
        'LLMs',
        'Strategic Planning',
        'Finance',
        'Performance Metrics',
        'AI Automation',
        'Healthcare',
        'Machine Learning',
        'Data Enrichment',
        'Marketing',
        'Cloud Solutions',
        'AI Integration',
        'Supply Chain',
        'Task Automation',
        'Business Intelligence',
        'Brand Positioning',
        'Revenue Optimization',
        'Business Growth',
        'Human Resource',
        'Market Research',
        'Media & Entertainment',
      ];

      return (
        <section className="use-cases">
          <h2>Hundreds of Use Cases</h2>
          <p>
            The CrewAI community has already found hundreds of use cases for AI
            agents. See examples below.
          </p>
          <div className="categories">
            {categories.map((category) => (
              <button key={category} className="category-button">
                {category}
              </button>
            ))}
          </div>
        </section>
      );
    }

    export default UseCases;
