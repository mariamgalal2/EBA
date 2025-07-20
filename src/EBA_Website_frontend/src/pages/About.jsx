import React from 'react';

const About = () => {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <div style={styles.text}>
          <h2>About Us</h2>
          <p><strong>Empowering Egypt’s Blockchain Future</strong></p>
          <p style={styles.light}>
            The Egyptian Blockchain Association (EBA) is dedicated to advancing blockchain technology
            and its adoption across Egypt. Founded to serve as the leading voice for blockchain innovation,
            we aim to drive the growth of decentralized technologies within the country and beyond.
          </p>
          <h3>Our Mission</h3>
          <p style={styles.light}>
            We aim to foster a vibrant ecosystem that empowers businesses, developers, and innovators to
            leverage blockchain technology through education, advocacy, and opportunity creation.
          </p>
          <h3>What We Do</h3>
          <ul style={styles.light}>
            <li>📚 Blockchain Education & Awareness</li>
            <li>⚖️ Industry Advocacy</li>
            <li>🤝 Building a Strong Ecosystem</li>
            <li>🎉 Hosting Events</li>
          </ul>
          <h3>Operated by Mercatura Forum</h3>
          <p>
            EBA is proudly operated by Mercatura Forum, a leading blockchain-focused organization helping to
            shape Egypt’s digital future.
          </p>
          <h3>Why Join Us?</h3>
          <ul style={styles.light}>
            <li>🔗 Access to resources, insights, and networking</li>
            <li>🌍 Be part of the MENA region’s leading blockchain community</li>
            <li>💡 Contribute to education and adoption</li>
          </ul>
        </div>
        <img src="/about_picture-01.svg" alt="EBA Team" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
  },
  text: {
    flex: 1,
    lineHeight: 1.6,
    maxWidth: '800px',
  },
  image: {
    flex: '0 0 300px',
    width: '100%',
    maxWidth: '300px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    objectFit: 'cover'
  }
};

export default About;
