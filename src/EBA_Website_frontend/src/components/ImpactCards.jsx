import React from 'react';
import './ImpactCards.css';

const impactData = [
  {
    title: 'Startups',
    icon: '🚀',
    description: 'Launch with regulatory clarity and funding support.',
  },
  {
    title: 'Developers',
    icon: '👨‍💻',
    description: 'Learn, build, and grow with Egypt’s best.',
  },
  {
    title: 'Institutions',
    icon: '🏛️',
    description: 'Craft tomorrow’s policies, today.',
  },
  {
    title: 'Sponsors',
    icon: '🤝',
    description: 'Lead the Web3 revolution with purpose and impact.',
  },
];

export default function ImpactCards({ onJoinClick }) {
  return (
    <section className="impactSection fade-in">
      <h2 className="impactHeader">This is Your Moment</h2>
      <div className="cardGrid">
        {impactData.map((item) => (
          <div key={item.title} className="impactCard">
            <div className="cardIcon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="cta">
        <button className="bigJoinButton" onClick={onJoinClick}>
          Become a Member →
        </button>
      </div>
    </section>
  );
}
