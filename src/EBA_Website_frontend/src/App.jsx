import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './components/Admin';
import JoinModal from './components/JoinModal'; // ✅ Import JoinModal
import { isAdmin } from './utils/auth';
import { useAuthClient } from './use-auth-client';

function App() {
  const { principal } = useAuthClient();
  const [adminAccess, setAdminAccess] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false); // ✅ Modal state

  useEffect(() => {
    if (principal) {
      setAdminAccess(isAdmin(principal.toString()));
    }
  }, [principal]);

  const handleJoinClick = () => setShowJoinModal(true); // ✅ Open modal
  const handleCloseModal = () => setShowJoinModal(false); // ✅ Close modal

  return (
    <Router>
      <div style={styles.app}>
        <Header isAdmin={adminAccess} onJoinClick={handleJoinClick} />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home onJoinClick={handleJoinClick} />} />
            <Route path="/about" element={<About />} />
            {
              adminAccess ? (
                <Route path="/admin" element={<Admin />} />
              ) : (
                <Route path="/admin" element={<Navigate to="/" replace />} />
              )
            }
            <Route path="*" element={<h2 style={styles.notFound}>404 - Page Not Found</h2>} />
          </Routes>
        </main>
        <Footer />
        {showJoinModal && <JoinModal onClose={handleCloseModal} />} {/* ✅ Render modal */}
      </div>
    </Router>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#062840',
    minHeight: '100vh',
  },
  main: {
    paddingTop: '40px',
  },
  notFound: {
    color: 'white',
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default App;
