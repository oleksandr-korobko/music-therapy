import bezklynska from '../../assets/img/team/01_Bezklynska_2.jpeg';
import article2Image from '../../assets/img/blog/article_2.jpg';

function Article2() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <article className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Роль музикотерапії в подоланні екзистенціальних криз в учасників бойових дій
          </h1>
          <div className="mt-6 flex items-center justify-center gap-x-4">
            <img
              src={bezklynska}
              alt="Ольга Безклинська"
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">Ольга Безклинська</p>
              <p className="text-gray-600">Голова Асоціації</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <img
            src={article2Image}
            alt="Military Meditation"
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>

        <div className="prose prose-lg prose-indigo mx-auto mt-16">
          <p>
            Україна переживає складні, доленосні часи: йде війна за збереження цілісності 
            і незалежності країни. Період радикальних зрушень примушує людську свідомість 
            загострено сприймати історичні реалії. Трагічна подійність - війна, постає як 
            екзистенціальна проблема нашої країни, пов'язана зі стражданнями людей, і 
            знаходить власне відображення на психологічному здоров'ї усього народу.
          </p>

          <h2>Екзистенціальні кризи військовослужбовців</h2>
          <p>
            Учасники бойових дій переживають екзистенціальну кризу, пов'язану з 
            травматичним досвідом війни. Це проявляється у втраті сенсу життя, 
            переосмисленні цінностей, зміні світогляду. Музикотерапія допомагає 
            подолати ці кризові стани через:
          </p>

          <ul>
            <li>Відновлення емоційної рівноваги</li>
            <li>Опрацювання травматичного досвіду</li>
            <li>Пошук нових смислів</li>
            <li>Гармонізацію психічного стану</li>
          </ul>

          {/* Додайте решту контенту статті */}
        </div>
      </article>
    </div>
  );
}

export default Article2; 