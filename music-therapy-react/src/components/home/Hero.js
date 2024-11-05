import { Link } from 'react-router-dom';
import presentation from '../../assets/img/introduction/presentation.jpg';
import childrenPiano from '../../assets/img/introduction/children&piano.jpg';
import presentation2 from '../../assets/img/introduction/presentation2.jpg';
import children from '../../assets/img/introduction/children.jpg';
import childrenNature from '../../assets/img/introduction/children&nature.jpg';

function Hero() {
  return (
    <section id="hero" className="relative isolate">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Всеукраїнська асоціація музикотерапевтів України
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                Об'єднує зусилля фахівців різних спеціальностей:
                музикотерапевтів, лікарів, педагогів, психологів, музикантів
                та інших, - задля сприяння розвитку в Україні музикотерапії
                як духовно-розвивального, психолого-педагогічного,
                здоров'язберігаючого напрямку науки та практики.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/about"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Про Нас
                </Link>
              </div>
            </div>
            
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    src={presentation}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    src={childrenPiano}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src={presentation2}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    src={children}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src={childrenNature}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 