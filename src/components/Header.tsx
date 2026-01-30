'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BUSINESS_INFO } from '@/data/constants';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'Outstation Tours', href: '/services/outstation-taxi-mysore' },
      { label: 'Local Sightseeing', href: '/services/local-sightseeing-taxi-mysore' },
      { label: 'Airport Transfers', href: '/services/airport-taxi-mysore' },
      { label: 'Tempo Traveller', href: '/services/tempo-traveller-mysore' },
      { label: 'Corporate Travel', href: '/services/corporate-taxi-mysore' },
      { label: 'Pilgrimage Tours', href: '/services/pilgrimage-taxi-mysore' },
    ]
  },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Routes', href: '/routes' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled ? 'lg:top-0 top-0 bg-[#F7DB91] shadow-md py-2' : 'lg:top-10 top-0 bg-[#F7DB91]/95 backdrop-blur-sm py-4 border-b border-gray-100'
      } left-0 right-0`}
    >
      <nav className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="SM Tours & Travels"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative group/nav"
              >
                {link.dropdown ? (
                  <>
                    <button className="font-semibold transition-colors py-2 text-sm xl:text-base whitespace-nowrap text-gray-700 hover:text-amber-600">
                      {link.label}
                      <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-55 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 ease-in-out z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="font-semibold transition-colors text-sm xl:text-base whitespace-nowrap text-gray-700 hover:text-amber-600"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link href="/book" className="px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-semibold transition-colors text-sm whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white">
              Book Taxi Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-amber-600"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in bg-white rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 rounded-lg font-semibold"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 inline ml-1 transition-transform ${
                            openDropdown === link.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-1 flex flex-col gap-1 bg-gray-50 rounded-lg p-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="px-4 py-2 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 rounded-lg font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/book"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors mt-2 mx-4 text-center text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
