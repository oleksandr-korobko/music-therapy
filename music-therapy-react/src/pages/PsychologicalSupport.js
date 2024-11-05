function PsychologicalSupport() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Психологічна підтримка
          </h2>
          
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Індивідуальні консультації
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Наші фахівці надають індивідуальні консультації з використанням методів музикотерапії для:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                <li>Подолання стресу та тривожності</li>
                <li>Роботи з травматичним досвідом</li>
                <li>Відновлення емоційної рівноваги</li>
                <li>Покращення психологічного стану</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Групові заняття
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Проводимо групові сесії музикотерапії, які допомагають:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                <li>Розвивати комунікативні навички</li>
                <li>Знаходити ресурсні стани</li>
                <li>Відновлювати соціальні зв'язки</li>
                <li>Обмінюватися досвідом з іншими учасниками</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Онлайн підтримка
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Надаємо психологічну підтримку онлайн через:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                <li>Відео-консультації</li>
                <li>Онлайн групові заняття</li>
                <li>Записи медитацій та музикотерапевтичних вправ</li>
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900">
                Як отримати допомогу?
              </h3>
              <div className="mt-4 rounded-lg bg-gray-50 p-6">
                <p className="text-lg text-gray-600">
                  Щоб записатися на консультацію або взяти участь у групових заняттях:
                </p>
                <ul className="mt-4 space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-3">1.</span>
                    <span>Зателефонуйте за номером: <a href="tel:+380XXXXXXXXX" className="text-indigo-600 hover:text-indigo-500">+380 XX XXX XX XX</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">2.</span>
                    <span>Напишіть на email: <a href="mailto:info@musictherapy.org.ua" className="text-indigo-600 hover:text-indigo-500">info@musictherapy.org.ua</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">3.</span>
                    <span>Заповніть форму зворотного зв'язку на нашому сайті</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-lg text-gray-600">
                Наші спеціалісти зв'яжуться з вами протягом 24 годин для уточнення деталей 
                та призначення зручного часу для консультації.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsychologicalSupport; 