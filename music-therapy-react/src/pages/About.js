import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Про нас
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Всеукраїнська асоціація музикотерапевтів України - це громадська організація, 
            яка об'єднує зусилля фахівців різних спеціальностей: музикотерапевтів, лікарів, 
            педагогів, психологів, музикантів та інших.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Наша місія
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Сприяння розвитку в Україні музикотерапії як духовно-розвивального, 
            психолого-педагогічного, здоров'язберігаючого напрямку науки та практики.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Наші досягнення
          </h3>
          <div className="mt-6 space-y-8 text-lg leading-8 text-gray-600">
            <p>
              Члени нашої Організації є авторами/співавторами навчальних програм, 
              які активно запроваджуються в загальноосвітніх школах, дошкільних та 
              позашкільних закладах України.
            </p>
            <p>
              У 2015 році розроблені та впроваджені у військових шпиталях, реабілітаційних 
              центрах України методичні рекомендації «Практичні аспекти використання 
              музикотерапії в комплексній реабілітації учасників антитерористичної операції».
            </p>
            <p>
              Члени асоціації беруть активну участь у впровадженні музикотерапії в системі 
              інклюзивного навчання для дітей з особливими проблемами.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <Link
            to="/contacts"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Зв'яжіться з нами
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About; 