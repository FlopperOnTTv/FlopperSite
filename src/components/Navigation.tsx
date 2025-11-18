import { ShoppingCart, Palette } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'designs';
  onNavigate: (page: 'home' | 'designs') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const openShop = () => {
    window.open('https://flopper.shop', '_blank');
  };

  return (
    <div className="fixed top-8 right-8 z-50 flex gap-3">
      <button
        onClick={() => onNavigate('home')}
        className={`nav-button ${currentPage === 'home' ? 'nav-active' : ''}`}
      >
        <span className="text-sm font-mono">HOME</span>
      </button>

      <button
        onClick={() => onNavigate('designs')}
        className={`nav-button ${currentPage === 'designs' ? 'nav-active' : ''}`}
      >
        <Palette className="w-4 h-4" />
        <span className="text-sm font-mono">DESIGNS</span>
      </button>

      <button
        onClick={openShop}
        className="nav-button hover:border-[#5552F7]/80"
      >
        <ShoppingCart className="w-4 h-4" />
        <span className="text-sm font-mono">SHOP</span>
      </button>
    </div>
  );
}
