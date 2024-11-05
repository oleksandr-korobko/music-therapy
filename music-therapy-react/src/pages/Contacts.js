function Contacts() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Контакти
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ГРОМАДСЬКА ОРГАНІЗАЦІЯ "ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ МУЗИКОТЕРАПЕВТІВ УКРАЇНИ"
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                Адреса
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                м. Київ, вул. Пирогова, 9
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                Електронна пошта
              </h3>
              <a 
                href="mailto:info@musictherapy.org.ua" 
                className="mt-2 block text-base leading-7 text-indigo-600 hover:text-indigo-500"
              >
                info@musictherapy.org.ua
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                Соціальні мережі
              </h3>
              <div className="mt-4 flex space-x-6">
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

            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0549290607567!2d30.50088937688781!3d50.44332458691566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0d112a0d11%3A0x7b42bc9c457d03a8!2z0LLRg9C70LjRhtGPINCf0LjRgNC-0LPQvtCy0LAsIDksINCa0LjRl9CyLCAwMTAwMA!5e0!3m2!1suk!2sua!4v1709641547943!5m2!1suk!2sua"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts; 