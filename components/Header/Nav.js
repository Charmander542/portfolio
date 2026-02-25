import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="w-full fixed top-0 z-50 select-none transition-all duration-300"
      style={{
        background: isScrolled
          ? '#1c0f1f'
          : 'linear-gradient(to bottom, rgba(28,15,31,0.92) 0%, transparent 100%)',
        boxShadow: isScrolled ? '0 1px 0 rgba(50,49,51,0.8)' : 'none',
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="flex justify-between section-container py-4">
          <a onClick={() => { router.push('/'); }} className="link cursor-pointer">
            <Image
              src="/cvh.svg"
              alt="CVH"
              width={45}
              height={38}
            />
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
