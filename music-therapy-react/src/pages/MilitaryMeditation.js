import { Link } from 'react-router-dom';
import militaryMeditationImage from '../assets/img/militaryMeditation.png';

const benefits = [
  {
    title: 'стабілізація активності мозкових хвиль',
  },
  {
    title: 'зниження рівня стресу, тривожності та депресії',
  },
  {
    title: 'зниження фобій, страху смерті',
  },
  {
    title: 'поліпшення настрою, здатності насолоджуватися життям',
  },
  {
    title: 'зростання впевненості в собі',
  },
  {
    title: 'удосконалення усвідомленості',
  },
  {
    title: 'поліпшення здатності концентруватися',
  },
  {
    title: 'посилення сили контролю емоцій',
  },
  {
    title: 'покращення когнітивних здібностей',
  }
];

function MilitaryMeditation() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Медитативні практики для військовослужбовців
        </h1>
        
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={militaryMeditationImage}
            alt="Military Meditation"
          />
        </figure>

        <p className="mt-6 text-xl leading-8">
          Відновлення психофізичного здоров'я, забезпечення психологічної
          стійкості військовослужбовців є важливою складовою збереження
          боєздатності української армії. Учасники бойових дій потребують
          кваліфікованої комплексної реабілітації, ефективної роботи над
          травматичним досвідом та його наслідками.
        </p>

        <p className="mt-6 text-xl leading-8">
          <strong>Медитація</strong> - це стан психоемоційної рівноваги в якому
          відбувається відновлення життєвих сил людини. Психоемоційна рівновага
          досягається за рахунок зосередження на поточному моменті «тут і
          зараз», зупинкою внутрішнього мовлення та контролю над своїми
          емоціями, реакціями, думками.
        </p>

        <div className="mt-10 max-w-2xl">
          <p className="text-xl">Було показано позитивний вплив медитації:</p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-x-3">
                <svg
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
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
                <span className="text-xl">{benefit.title}</span>
              </li>
            ))}
          </ul>

          <p className="text-xl mt-8">
            Європейські клінічні настанови з лікування артеріальної гіпертензії
            2023 р. розглядають медитацію і контроль дихання одним із кращих
            заходів зі зменшення стресу для зниження артеріального тиску.
          </p>

          <p className="text-xl mt-8 mb-16">
            <Link
              to="../files/Meditation_Practices_by_Military.pdf"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Завантажити Інформаційний лист
            </Link>
          </p>

          {/* Додаткові секції */}
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Світовий досвід використання медитативних практик для учасників бойових дій
          </h2>
          {/* ... інший контент ... */}

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Досвід використання медитації для військовослужбовців в Україні
          </h2>
          {/* ... інший контент ... */}

          <div className="aspect-w-16 aspect-h-9 my-8">
            <iframe
              src="https://www.youtube.com/embed/pMjoWPVifbM?si=D6cPt6lw6NuRi4nn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="aspect-w-16 aspect-h-9 my-8">
            <iframe
              src="https://www.youtube.com/embed/AI_QBBIamDM?si=E1H2YxQ6k55cvV73"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="text-xl mt-6">
            Більше записів онлайн-медитацій ви можете знайти на нашому{' '}
            <a
              href="https://www.youtube.com/@user-hj3we9nn3x"
              className="underline text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ютуб каналі
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MilitaryMeditation; 