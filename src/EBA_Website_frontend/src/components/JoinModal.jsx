import React, { useState } from 'react';
import { EBA_Website_backend } from '../../../declarations/EBA_Website_backend';
import './JoinModal.css';

const JoinModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', profession: ''
  });
  const [message, setMessage] = useState('');
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await EBA_Website_backend.submitMember(
        formData.name,
        formData.email,
        formData.phone,
        formData.profession
      );
      setMessage(response);
      if (response?.toLowerCase().includes('success')) {
        setTimeout(() => onClose(), 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modalOverlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modalContainer">
        <button className="modalCloseBtn" onClick={onClose}>×</button>
        <h2 className="modalHeading">🚀 Join the EBA</h2>
        <form onSubmit={handleSubmit} className="modalForm">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="modalInput"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="modalInput"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="modalInput"
          />
          <input
            name="profession"
            placeholder="Profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="modalInput"
          />
          <button
            type="submit"
            disabled={loading}
            className="modalButton"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {message && <p className="modalMessage">{message}</p>}
      </div>
    </div>
  );
};

export default JoinModal;
