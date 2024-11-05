import { Link } from 'react-router-dom';
import rehabilitationImage1 from '../assets/img/mt_for_rehabilitation/rehabilitation_1.jpg';
import rehabilitationImage2 from '../assets/img/mt_for_rehabilitation/rehabilitation_2.jpg';

function MusicTherapyForRehabilitation() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Музикотерапія для психологічної реабілітації військовослужбовців
        </h1>

        <p className="mt-6 text-xl leading-8">
          У 2015 році розроблені та впроваджені у військових шпиталях, реабілітаційних 
          центрах України методичні рекомендації «Практичні аспекти використання 
          музикотерапії в комплексній реабілітації учасників антитерористичної операції».
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Основні напрямки роботи
          </h2>
          <ul className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Психологічна реабілітація учасників бойових дій</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Робота з ПТСР</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Відновлення психоемоційного стану</span>
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={rehabilitationImage1}
            alt="Rehabilitation Process"
          />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Методи роботи
          </h2>
          <ul className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Індивідуальні сесії музикотерапії</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Групові заняття</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Музично-релаксаційні техніки</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Медитативні практики з музичним супроводом</span>
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={rehabilitationImage2}
            alt="Rehabilitation Process"
          />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Результати роботи
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Використання музикотерапії в реабілітації військовослужбовців показало значні 
            позитивні результати:
          </p>
          <ul className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Зниження рівня тривожності та депресії</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Покращення якості сну</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Підвищення стресостійкості</span>
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <Link
            to="/military-meditation"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Дізнатися більше про медитацію для військових →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MusicTherapyForRehabilitation; 