function MusicTherapyForSpecialNeeds() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Музикотерапія для дітей з особливими потребами
        </h1>

        <p className="mt-6 text-xl leading-8">
          Члени асоціації беруть активну участь у впровадженні музикотерапії в системі 
          інклюзивного навчання для дітей з особливими проблемами. Розроблені навчальна 
          та корекційно-реабілітаційна програми.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Напрямки роботи
          </h2>
          <ul className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Розвиток комунікативних навичок</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Емоційний розвиток</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Соціальна адаптація</span>
            </li>
          </ul>
        </div>

        {/* Додаткові секції... */}
      </div>
    </div>
  );
}

export default MusicTherapyForSpecialNeeds; 