import React, { useState } from 'react';
import { EBA_Website_backend } from '../../../declarations/EBA_Website_backend';

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
      // Optional: Auto-close modal if submission successful
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
      style={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>×</button>
        <h2 style={styles.heading}>🚀 Join the EBA</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="profession"
            placeholder="Profession"
            value={formData.profession}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(hover ? styles.buttonHover : {}),
              ...(loading ? { opacity: 0.6, cursor: 'not-allowed' } : {})
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%',
    height: '100%', backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 2000,
  },
  modal: {
    backgroundColor: '#062840',
    padding: '2.5rem 2rem',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '420px',
    color: 'white',
    position: 'relative',
    textAlign: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    color: 'white',
    cursor: 'pointer',
  },
  heading: {
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
  },
  button: {
    padding: '0.75rem 1.5rem',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: 'white',
    color: '#062840',
  },
  message: {
    marginTop: '1rem',
    color: 'lightgreen',
    fontWeight: 'bold',
  },
};

export default JoinModal;
