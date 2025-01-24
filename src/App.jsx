import React from 'react';
    import './App.css';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Integrations from './components/Integrations';
    import Features from './components/Features';
    import Stats from './components/Stats';
    import Deployment from './components/Deployment';
    import IntegrationsSection from './components/IntegrationsSection';
    import IntegrationDetails from './components/IntegrationDetails';
    import Visibility from './components/Visibility';
    import TestimonialSlider from './components/TestimonialSlider';
    import UseCases from './components/UseCases';
    import UseCaseCards from './components/UseCaseCards';
    import EvaluateUseCase from './components/EvaluateUseCase';
    import CallToAction from './components/CallToAction';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="App">
          <Header />
          <Hero />
          <Integrations />
          <Features />
          <Stats />
          <Deployment />
          <IntegrationsSection />
          <IntegrationDetails />
          <Visibility />
          <TestimonialSlider />
          <UseCases />
          <UseCaseCards />
          <EvaluateUseCase />
          <CallToAction />
          <Footer />
        </div>
      );
    }

    export default App;
