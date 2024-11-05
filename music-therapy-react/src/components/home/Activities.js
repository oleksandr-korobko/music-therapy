import { Link } from 'react-router-dom';
import { InboxIcon, UsersIcon, SunIcon } from '@heroicons/react/24/outline';

const activities = [
  {
    title: 'Музикотерапія в освіті',
    description: 'Члени Асоціації є співавторами навчальних програм «Музикотерапія» та «Практика емоційної рівноваги засобами мистецтва», що активно запроваджуються в загальноосвітніх школах, дошкільних та позашкільних закладах України.',
    icon: InboxIcon,
    link: '/mt-in-education'
  },
  {
    title: 'Музикотерапія для психологічної реабілітації військовослужбовців',
    description: 'У 2015 році розроблені та впроваджені у військових шпиталях, реабілітаційних центрах України методичні рекомендації «Практичні аспекти використання музикотерапії в комплексній реабілітації учасників антитерористичної операції».',
    icon: UsersIcon,
    link: '/mt-for-rehabilitation'
  },
  {
    title: 'Музикотерапія для дітей з особливими потребами',
    description: 'Члени соціації беруть активну участь у впровадженні музикотерапії в системі інклюзивного навчання для дітей з особливими проблемами. Розроблені навчальна та корекційно-реабілітаційна програми.',
    icon: SunIcon,
    link: '/mt-for-children-with-special-needs'
  }
];

function Activities() {
  return (
    <section id="activities" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            Напрямки діяльності
          </h2>
          <p className="mt-4 text-lg text-center leading-8 text-gray-600">
            Дізнайтеся більше про активності та проекти, які ведуть члени нашої Aсоціації
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.title} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-black">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <activity.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {activity.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{activity.description}</p>
                  <p className="mt-6">
                    <Link
                      to={activity.link}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Дізнатися більше <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Activities; 