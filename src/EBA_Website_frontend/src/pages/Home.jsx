import React, { useState, useEffect } from 'react';
import { EBA_Website_backend } from '../../../declarations/EBA_Website_backend';
import './Home.css';
import ImpactCards from '../components/ImpactCards';
import JoinModal from '../components/JoinModal';
import VideoBanner from '../components/VideoBanner';


export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
  });

  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

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

  const openModal = () => setShowJoinModal(true);
  const closeModal = () => setShowJoinModal(false);

  return (
    <div className="page">
      <VideoBanner />
      <section className="heroSection fade-in">
        {/* <h1 className="heroTitle">Where Egypt’s Past Meets the Blockchain Future</h1> */}
        <p className="heroSubtitle">Join the Egyptian Blockchain Association</p>
        <p className="heroSubtitle">
          Egypt’s gateway to Web3 innovation, decentralized governance, and tokenized economies.
        </p>
        <div className="buttonGroup">
          <button
            className={isHovered ? 'ctaButton glow' : 'ctaButton'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={openModal}
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
          enterprises, and institutions under a single mission:
        </p>
        <p><span className="highlight">to make Egypt a global leader in blockchain technology.</span></p>

        <div className="buttonGroup">
          <button className="secondaryButton" onClick={openModal}>Become a Member</button>
          <button className="secondaryButton">Download the EBA Brief</button>
        </div>
        <div className="italicNote">📜 Pharaoh Scrolls → 🔗 Smart Contracts</div>
      </section>

      <hr className="divider" />

      <section className="section fade-in">
        <h2>Our Ecosystem Members</h2>
        <div className="logoGroup"> 
        <div title="MercX – Tokenized Investment Platform for Real-World Assets" className="ecosystemItem">
          <img src="/assets/mercx_logo.png" alt="MercX Logo" className="ecosystemLogo" />
          MercX
        </div>
          <div title="Bridge – Web3 Onboarding Platform for the Arab World">🌉 Bridge</div>
          <div title="ICP Hub Egypt – Driving Internet Computer (ICP) adoption in North Africa">🌐 ICP Hub</div>
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

      <hr className="divider" />

      <ImpactCards onJoinClick={openModal} />

      {showJoinModal && (
        <JoinModal
          onClose={closeModal}
        />
      )}
    </div>
  );
}
