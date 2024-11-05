import { Link } from 'react-router-dom';
import article1Image from '../../assets/img/blog/article_1.jpeg';
import article2Image from '../../assets/img/blog/article_2.jpg';
import article3Image from '../../assets/img/blog/article_3.JPG';
import bezklynska from '../../assets/img/team/01_Bezklynska_2.jpeg';

const posts = [
  {
    id: 1,
    title: 'Досвід використання музикотерапії в комплексній реабілітації учасників антитерористичної операції',
    href: '/blog/article-1',
    description: 'Серед актуальних проблем, які потребують невідкладного вирішення – організація ефективної реабілітації учасників антитерористичної операції. Це питання розглядається на державному рівні, задіяні громадські організації, значну методичну допомогу надають фахівці з інших країн',
    imageUrl: article1Image,
    author: {
      name: 'Ольга Безклинська',
      role: 'Голова Асоціації',
      imageUrl: bezklynska
    }
  },
  {
    id: 2,
    title: 'Роль музикотерапії в подоланні екзистенціальних криз в учасників бойових дій',
    href: '/blog/article-2',
    description: 'Україна переживає складні, доленосні часи: йде війна за збереження цілісності і незалежності країни. Пріод радикальних зрушень примушує людську свідомість загострено сприймати історичні реалії. Трагічна подійність - війна, постає як екзистенціальна проблема нашої країни',
    imageUrl: article2Image,
    author: {
      name: 'Ольга Безклинська',
      role: 'Голова Асоціації',
      imageUrl: bezklynska
    }
  },
  {
    id: 3,
    title: 'Підвищення інтелектуально-творчого потенціалу учнів засобами музикотерапії',
    href: '/blog/article-3',
    description: 'Впровадження курсу "Музикотерапія" не потребує особливої організації навчального процесу, легко вписується в рамки класно-урочної та класно-виховної системи, а також може практикуватися в будь-який час упродовж навчального дня',
    imageUrl: article3Image,
    author: {
      name: 'Ольга Безклинська',
      role: 'Голова Асоціації',
      imageUrl: bezklynska
    }
  }
];

function Blog() {
  return (
    <section id="blog" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Блог
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Дізнайтеся більше інформації про користь музикотерапії
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog; 