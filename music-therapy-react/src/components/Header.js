import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import logo from '../assets/img/logo.jpg';

function Header({ setMobileMenuOpen }) {
  return (
    <header className="inset-x-0 top-0 z-50">
      <div className="nav__wrapper fixed bg-white inset-x-0 top-0 z-50 transition-[box-shadow,padding] duration-1000 ease-in-out">
        <nav
          className="nav inset-x-0 top-0 mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8 transition-[padding] duration-1000 ease-in-out"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">ВАМУ</span>
              <img
                className="h-8 lg:h-10 w-auto"
                src={logo}
                alt="Company Logo"
              />
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Відкрити меню</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/#activities" className="text-sm font-semibold leading-6 text-gray-900">
              Напрямки діяльності
            </Link>
            <Link to="/team" className="text-sm font-semibold leading-6 text-gray-900">
              Експерти
            </Link>
            <Link to="/military-meditation" className="text-sm font-semibold leading-6 text-gray-900">
              Медитація для військових
            </Link>
            <Link to="/psychological-support" className="text-sm font-semibold leading-6 text-gray-900">
              Психологічна підтримка
            </Link>
            <Link to="/contacts" className="text-sm font-semibold leading-6 text-gray-900">
              Контакти
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header; 