import { Link } from 'react-router-dom';
import bezklynska from '../../assets/img/team/01_Bezklynska_2.jpeg';
import poberezhna from '../../assets/img/team/08_Poberezhna_2.jpg';
import huralnyk from '../../assets/img/team/Huralnyk_2.jpg';
import malashevska from '../../assets/img/team/04_Malashevska_2.jpg';
import strogal from '../../assets/img/team/09_Strogal_2.png';
import moroz from '../../assets/img/team/07_Moroz_2.jpg';

const experts = [
  {
    name: 'Ольга Безклинська',
    role: 'Голова Асоціації',
    imageUrl: bezklynska,
    description: 'Голова ГО "ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ МУЗИКОТЕРАПЕВТІВ УКРАЇНИ", викладачка вищої категорії Білоцерківської школи мистецтв ім. Якова Яциневича, психологиня Білоцерківського Військового шпиталю, автор/співавтор освітніх та реабілітаційних програм з музикотерапії.'
  },
  {
    name: 'Галина Побережна',
    role: 'Професорка',
    imageUrl: poberezhna,
    description: 'Професорка, докторка мистецтвознавства, музикотерапевт, астропсихологиня, з 1991 по 2006 рр. очолювала кафедру теорії та історії музики Національного педагогічного університету імені М.П. Драгоманова, ідейний засновник напрямку музикотерапія в Україні.'
  },
  {
    name: 'Наталія Гуральник',
    role: 'Докторка педагогічних наук',
    imageUrl: huralnyk,
    description: 'Докторка педагогічних наук, професорка кафедри педагогіки мистецтва і фортепіанного виконавства, факультет мистецтв імені Анатолія Авдієвського НПУ імені М.П. Драгоманова, голова комісії дисциплін художньо-естетичного циклу Науково-методичної Рад з питань освіти МОН України.'
  },
  {
    name: 'Ірина Малашевська',
    role: 'Докторка педагогічних наук',
    imageUrl: malashevska,
    description: 'Докторка педагогічних наук, професорка кафедри музичного мистецтва і методики навчання Університету Григорія Сковороди в Переяславі, фахівчиня музично-оздоровчої діяльності з дітьми дошкільного віку, автор/співавтор освітніх програм з музикотерапії.'
  },
  {
    name: 'Тетяна Строгаль',
    role: 'Кандидатка педагогічних наук',
    imageUrl: strogal,
    description: 'Кандидатка педагогічних наук, доцентка кафедри теорії та історії музики Національного педагогічного університету імені М.П. Драгоманова, практикуюча психологиня, музичний терапевт, арт-терапевт, автор/співавтор освітніх програм та програм з підвищення кваліфікації для фахівців з музикотерапії.'
  },
  {
    name: 'Галина Мороз',
    role: 'Докторка медичних наук',
    imageUrl: moroz,
    description: 'Докторка медичних наук, професор, Заслужена лікарка України, професорка кафедри військової загальної практика-сімейної медицини Української військово-медичної академії, співавтор освітніх та реабілітаційних програм з музикотерапії.'
  }
];

function Team() {
  return (
    <section id="team" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Link to="/team">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ключові експерти
            </h2>
          </Link>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Члени нашої Асоціації мають багатогранну експертизу в музикотерапії
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {experts.map((person) => (
            <li key={person.name}>
              <img
                className="mx-auto h-56 w-56 rounded-full object-cover"
                src={person.imageUrl}
                alt={person.name}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm line-clamp-3 leading-6 text-gray-600">
                {person.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Team; 