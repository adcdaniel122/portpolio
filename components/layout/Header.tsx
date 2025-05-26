'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Contact', path: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  
  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    // If the path is a hash link on the current page, scroll to the element
    if (path.includes('#') && pathname === '/') {
      // Remove the leading slash before querying the element
      const selector = path.substring(1);
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl md:text-2xl">
          <span className="text-primary">Portfolio</span>
          <span className="text-primary/80">.dev</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => handleLinkClick(item.path)}
              className={cn(
                'text-foreground/80 hover:text-primary transition-colors',
                pathname === item.path && 'text-primary font-medium'
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="mr-2"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 px-6 flex flex-col space-y-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => handleLinkClick(item.path)}
              className={cn(
                'text-foreground/80 hover:text-primary transition-colors py-2',
                pathname === item.path && 'text-primary font-medium'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}