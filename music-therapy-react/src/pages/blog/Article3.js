import bezklynska from '../../assets/img/team/01_Bezklynska_2.jpeg';
import article3Image from '../../assets/img/blog/article_3.JPG';

function Article3() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <article className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Підвищення інтелектуально-творчого потенціалу учнів засобами музикотерапії
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
            src={article3Image}
            alt="Music Therapy in Education"
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>

        <div className="prose prose-lg prose-indigo mx-auto mt-16">
          <p>
            Впровадження курсу "Музикотерапія" не потребує особливої організації 
            навчального процесу, легко вписується в рамки класно-урочної та 
            класно-виховної системи, а також може практикуватися в будь-який час 
            упродовж навчального дня.
          </p>

          <h2>Переваги музикотерапії в освітньому процесі</h2>
          <ul>
            <li>Розвиток творчого мислення</li>
            <li>Покращення концентрації уваги</li>
            <li>Підвищення мотивації до навчання</li>
            <li>Розвиток емоційного інтелекту</li>
            <li>Зниження рівня стресу та тривожності</li>
          </ul>

          <h2>Методи впровадження</h2>
          <p>
            Музикотерапія може бути інтегрована в освітній процес через:
          </p>
          <ul>
            <li>Музичні паузи під час уроків</li>
            <li>Спеціальні музикотерапевтичні заняття</li>
            <li>Творчі проекти з використанням музики</li>
            <li>Групові музичні активності</li>
          </ul>

          {/* Додайте решту контенту статті */}
        </div>
      </article>
    </div>
  );
}

export default Article3; 