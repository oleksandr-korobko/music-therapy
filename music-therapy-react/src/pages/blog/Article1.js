import bezklynska from '../../assets/img/team/01_Bezklynska_2.jpeg';

function Article1() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <article className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Досвід використання музикотерапії в комплексній реабілітації учасників антитерористичної операції
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

        <div className="prose prose-lg prose-indigo mx-auto mt-16">
          <p>
            Серед актуальних проблем, які потребують невідкладного вирішення – організація 
            ефективної реабілітації учасників антитерористичної операції. Це питання 
            розглядається на державному рівні, задіяні громадські організації, значну 
            методичну допомогу надають фахівці з інших країн.
          </p>
          
          {/* Додайте решту контенту статті */}
        </div>
      </article>
    </div>
  );
}

export default Article1; 