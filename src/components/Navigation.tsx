interface NavigationProps {
  currentPage: 'home';
  onNavigate: (page: 'home') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div className="fixed top-8 right-8 z-50 flex gap-3">
      <button
        onClick={() => onNavigate('home')}
        className={`nav-button ${currentPage === 'home' ? 'nav-active' : ''}`}
      >
        <span className="text-sm font-mono">HOME</span>
      </button>
    </div>
  );
}
