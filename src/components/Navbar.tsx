
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full px-6 py-8 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link to="/" className="text-sm font-medium hover:opacity-70 transition-opacity">
          Adolfo Rangel
        </Link>
        <span className="text-sm text-gray-500">
          Available for work
        </span>
        <div className="flex items-center gap-8">
          <Link to="/work" className="text-sm hover:opacity-70 transition-opacity">
            Work
          </Link>
          <Link to="/about" className="text-sm hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link to="/playground" className="text-sm hover:opacity-70 transition-opacity">
            Playground
          </Link>
        </div>
        <a 
          href="mailto:william@graanefors.com" 
          className="text-sm hover:opacity-70 transition-opacity"
        >
          adolfo@heyaylabs.com
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
