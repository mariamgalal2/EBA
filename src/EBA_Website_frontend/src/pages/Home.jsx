import React, { useState, useEffect } from 'react';
import { EBA_Website_backend } from '../../../declarations/EBA_Website_backend';
import './Home.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
  });

  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const style = document.createElement('style');
  //   style.innerHTML = `
  //     @keyframes fadeInUp {
  //       from { opacity: 0; transform: translateY(20px); }
  //       to { opacity: 1; transform: translateY(0); }
  //     }
  //     .fade-in { animation: fadeInUp 1s ease-out; }

  //     @keyframes pulse {
  //       0% { box-shadow: 0 0 0 0 rgba(255, 153, 0, 0.7); }
  //       70% { box-shadow: 0 0 0 10px rgba(255, 153, 0, 0); }
  //       100% { box-shadow: 0 0 0 0 rgba(255, 153, 0, 0); }
  //     }
  //   `;
  //   document.head.appendChild(style);
  // }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await EBA_Website_backend.submitMember(
        formData.name,
        formData.email,
        formData.phone,
        formData.profession
      );
      setMessage(res);
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="page">
      <section className="heroSection fade-in">
        <h1 className="heroTitle">Where Egypt’s Past Meets the Blockchain Future</h1>
        <p className="heroSubtitle">Join the Egyptian Blockchain Association</p>
        <p className="heroSubtitle">
          Egypt’s gateway to Web3 innovation, decentralized governance, and tokenized economies.
        </p>
        <div className="buttonGroup">
          <button
            className={isHovered ? 'ctaButton glow' : 'ctaButton'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() =>
              document.getElementById('join-form').scrollIntoView({ behavior: 'smooth' })
            }
          >
            Join the Movement
          </button>
        </div>
      </section>

      <hr className="divider" />

      <section className="section fade-in">
        <h2>Powering Egypt’s Web3 Ecosystem</h2>
        <p>
          The Egyptian Blockchain Association (EBA) is a national initiative to accelerate
          blockchain adoption, regulatory alignment, and innovation. We unite developers, startups,
          enterprises, and institutions under a single mission: to make Egypt a global leader in
          blockchain technology.
        </p>
        <div className="buttonGroup">
          <button className="secondaryButton">Become a Member</button>
          <button className="secondaryButton">Download the EBA Brief</button>
        </div>
        <div className="italicNote">📜 Pharaoh Scrolls → 🔗 Smart Contracts</div>
      </section>

      <hr className="divider" />

      <section className="section fade-in">
        <h2>Our Ecosystem Members</h2>
        <div className="logoGroup">
          <div title="MercX – Tokenized Investment Platform for Real-World Assets">🪙 MercX</div>
          <div title="Bridge – Web3 Onboarding Platform for the Arab World">🌉 Bridge</div>
          <div title="ICP Hub Egypt – Driving Internet Computer (ICP) adoption in North Africa">
            🌐 ICP Hub
          </div>
          <div title="Mercatura Forum – Egypt’s leading blockchain venture studio">🏛️ Mercatura</div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section fade-in">
        <h2>Are You Building the Future of Egypt?</h2>
        <p>
          EBA offers access to mentorship, hackathons, funding opportunities, and technical
          support. We connect you with VCs, regulators, and industry leaders to turn your code into
          capital.
        </p>
        <div className="buttonGroup">
          <button className="secondaryButton">Submit Your Project</button>
          <button className="secondaryButton">Join the Developer Network</button>
        </div>
        <div className="italicNote">💡 Idea → 🧑‍💻 MVP → 🚀 Launch</div>
      </section>

      <hr className="divider" />

      <section className="section fade-in">
        <h2>A Secure Bridge Between Policy and Innovation</h2>
        <p>
          EBA is your partner in crafting forward-thinking, compliant blockchain strategies. We
          support public-private collaboration, offer regulatory workshops, and facilitate sandbox
          programs to help you safely unlock the potential of decentralized systems.
        </p>
        <div className="buttonGroup">
          <button className="secondaryButton">Request Institutional Membership</button>
          <button className="secondaryButton">View Policy Papers</button>
        </div>
        <div className="italicNote">🧑‍⚖️ Council ↔️ 💾 Digital Assets</div>
      </section>

      <hr className="divider" />

      <section className="section fade-in">
        <h2>Partner with Egypt’s Web3 Vanguard</h2>
        <ul>
          <li>Brand Visibility at Events like Cairo Blockchain Week</li>
          <li>Access to Egypt’s most active blockchain developers</li>
          <li>Thought Leadership & Co-Branded Hackathons</li>
        </ul>
        <div className="buttonGroup">
          <button className="secondaryButton">Become a Sponsor</button>
          <button className="secondaryButton">Download Sponsorship Deck</button>
        </div>
        <div className="italicNote">Sponsor Logos with Hover Stats</div>
      </section>

      <hr className="divider divider-thick" />

      <section id="join-form" className="joinSection fade-in">
        <h2 className="sectionHeader">Become a Member</h2>
        <form onSubmit={handleSubmit} className="formGrid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession / Role"
            required
            value={formData.profession}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="submitButton">Submit</button>
        </form>
        {message && <p className="successMessage">{message}</p>}
      </section>

      <hr className="divider" />

      <section className="section fade-in">
        <h2>This is Your Moment.</h2>
        <ul>
          <li><strong>Startups:</strong> Launch with regulatory clarity and funding support.</li>
          <li><strong>Developers:</strong> Learn, build, and grow with Egypt’s best.</li>
          <li><strong>Institutions:</strong> Craft tomorrow’s policies, today.</li>
          <li><strong>Sponsors:</strong> Lead the Web3 revolution with purpose and impact.</li>
        </ul>
        <div className="cta">
          <button className="bigJoinButton">Become a Member →</button>
        </div>
      </section>
    </div>
  );
}