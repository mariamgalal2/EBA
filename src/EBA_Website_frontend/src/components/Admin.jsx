import React from 'react';

const Admin = () => {
  return (
    <section style={styles.container}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, admin. This is your control panel.</p>
      {/* Add admin controls here (export, delete, manage users, etc.) */}
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    color: '#fff',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  }
};

export default Admin;
