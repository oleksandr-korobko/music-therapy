import { Link } from 'react-router-dom';
import militaryMeditationImage from '../../assets/img/reverseMilitaryMeditation.jpg';

const benefits = [
  {
    title: 'Зниження',
    description: 'рівня стресу, тривожності, депресії та фобій'
  },
  {
    title: 'Поліпшення',
    description: 'настрою, зростання впевненості в собі'
  },
  {
    title: 'Посилення',
    description: 'сили контролю емоцій'
  },
  {
    title: 'Покращення',
    description: 'когнітивних здібностей'
  },
  {
    title: 'Поліпшення',
    description: 'здатності концентруватися'
  }
];

function MilitaryMeditation() {
  return (
    <section id="military-meditation" className="overflow-hidden bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <Link to="/military-meditation">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Медитація для військових
                </h2>
              </Link>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Медитація використовується як складова комплексної психологічної
                підготовки військовослужбовців у різних країнах світу, зокрема в
                США. Ключові переваги медитації:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit.title}
                    </dt>
                    <dd className="inline"> {benefit.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                В Україні 2023 році розроблені методичні рекомендації "Використання
                медитативних практик у психологічній реабілітації
                військовослужбовців".
              </p>
              <p className="mt-6">
                <Link
                  to="/military-meditation"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Дізнатися більше <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </div>

          <div className="my-auto flex items-start justify-end lg:order-first">
            <img
              src={militaryMeditationImage}
              alt="Military Meditation"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MilitaryMeditation; 