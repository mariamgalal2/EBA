import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <span style={styles.left}>© {new Date().getFullYear()} Egyptian Blockchain Association.</span>
      <span style={styles.right}>Powered by Mercatura Forum</span>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    fontSize: '0.8rem',
    height: '40px'
  },
  left: {
    color: 'white',
  },
  right: {
    color: 'white',
  }
};

export default Footer;
