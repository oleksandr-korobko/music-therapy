import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white shadow-[0_-1px_4px_rgba(0,0,0,0.1)]" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-5 pb-8 grid gap-4 xl:grid-cols-[2fr_5fr] xl:gap-24">
        <div>
          <Link to="/contacts" className="text-sm leading-6 text-gray-600">
            ГРОМАДСЬКА ОРГАНІЗАЦІЯ "ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ МУЗИКОТЕРАПЕВТІВ УКРАЇНИ"
          </Link>
          <div className="mt-3 flex space-x-6">
            <a
              href="https://www.youtube.com/@user-hj3we9nn3x/featured"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">YouTube</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Footer Navigation */}
        <div className="hidden sm:grid gap-8 grid-cols-[2fr_3fr_3fr] xl:grid-cols-[1fr_2fr_2fr] grid-rows-[auto_auto_auto_auto] gap-y-2.5 gap-x-30">
          {/* Footer columns... */}
        </div>

        {/* Mobile Footer Navigation */}
        <div className="sm:hidden">
          {/* Mobile footer content... */}
        </div>
      </div>
    </footer>
  );
}

export default Footer; 