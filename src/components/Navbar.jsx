import { Link, NavLink } from 'react-router-dom'
import { navLinks, profileImage } from '../data/site.js'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        <Link to="/" className="flex items-center gap-space-sm group">
          <span className="font-display-xl text-[26px] leading-none font-bold tracking-tight text-on-surface">
            Jackson<span className="text-primary-container">.</span>
          </span>
          <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
            JACKSON
          </span>
        </Link>
        <div className="flex items-center gap-space-lg">
          <nav className="flex items-center gap-space-md md:gap-space-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "tracking-wider transition-colors py-1 text-primary-container font-medium font-label-md text-label-md after:content-[''] after:block after:w-1 after:h-1 after:bg-primary-container after:rounded-full after:mx-auto after:mt-1"
                    : 'font-label-md text-label-md tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center pl-space-xs">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={profileImage} />
          </div>
        </div>
      </div>
    </header>
  )
}
