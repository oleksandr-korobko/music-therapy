import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 